// Gera os cards "Atividade no GitHub" e "Linguagens mais usadas" com dados públicos da API do GitHub.
// Uso: GITHUB_TOKEN=... node cards.mjs <usuario> <pasta-de-saida>
import { mkdirSync, writeFileSync } from "node:fs";

const [user, outDir = "dist"] = process.argv.slice(2);
const token = process.env.GITHUB_TOKEN;
if (!user || !token) throw new Error("uso: GITHUB_TOKEN=... node cards.mjs <usuario> [saida]");

const query = `query($login: String!) {
  user(login: $login) {
    pullRequests { totalCount }
    repositories(ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, first: 100) {
      totalCount
      nodes { name languages(first: 10, orderBy: { field: SIZE, direction: DESC }) { edges { size node { name color } } } }
    }
    contributionsCollection {
      totalCommitContributions
      contributionCalendar { totalContributions weeks { contributionDays { contributionCount } } }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json", "User-Agent": "profile-cards" },
  body: JSON.stringify({ query, variables: { login: user } }),
});
const { data, errors } = await res.json();
if (errors) throw new Error(JSON.stringify(errors));
const u = data.user;

// ---- paleta e fontes (identidade Biel Strategy)
const C = { bg: "#0A0A0A", line: "#242424", red: "#E21D48", white: "#FFFFFF", g300: "#B3B3B3", g400: "#8C8C8C", g500: "#6E6E6E" };
const SANS = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const MONO = "ui-monospace, 'SFMono-Regular', Consolas, monospace";
const W = 495, H = 200;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const fmt = (n) => n.toLocaleString("pt-BR");
const today = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });

const frame = (title, desc, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">${esc(title)}</title><desc id="d">${esc(desc)}</desc>
  <rect width="${W}" height="${H}" rx="14" fill="${C.bg}"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="13.5" fill="none" stroke="${C.line}"/>
  <text x="28" y="40" fill="${C.red}" font-family="${MONO}" font-size="12" font-weight="600" letter-spacing="2.5">${esc(title.toUpperCase())}</text>
${body}
</svg>
`;

// ---- card 1: atividade dos últimos 12 meses + gráfico semanal
const cc = u.contributionsCollection;
const weeks = cc.contributionCalendar.weeks.map((w) => w.contributionDays.reduce((a, d) => a + d.contributionCount, 0));
const rows = [
  ["Contribuições", cc.contributionCalendar.totalContributions],
  ["Commits", cc.totalCommitContributions],
  ["Pull requests", u.pullRequests.totalCount],
  ["Repositórios públicos", u.repositories.totalCount],
];
const rowSvg = rows
  .map(([k, v], i) => {
    const y = 74 + i * 28;
    return `  <text x="28" y="${y}" fill="${C.g300}" font-family="${SANS}" font-size="14">${esc(k)}</text>
  <text x="228" y="${y}" fill="${C.white}" font-family="${SANS}" font-size="15" font-weight="700" text-anchor="end">${fmt(v)}</text>`;
  })
  .join("\n");
const gx = 262, gw = 205, gy = 60, gh = 100;
const max = Math.max(1, ...weeks);
const bw = gw / weeks.length;
const bars = weeks
  .map((v, i) => {
    const h = v ? Math.max(3, (v / max) * gh) : 1.5;
    return `<rect x="${(gx + i * bw).toFixed(2)}" y="${(gy + gh - h).toFixed(2)}" width="${Math.max(1, bw - 1).toFixed(2)}" height="${h.toFixed(2)}" rx="1" fill="${v ? C.red : C.line}"/>`;
  })
  .join("");
const activity = frame(
  "Atividade no GitHub",
  `Últimos 12 meses: ${rows.map(([k, v]) => `${k} ${v}`).join(", ")}. Atualizado em ${today}.`,
  `${rowSvg}
  <g>${bars}</g>
  <text x="${gx}" y="${gy + gh + 18}" fill="${C.g500}" font-family="${MONO}" font-size="10">contribuições por semana · 12 meses</text>
  <text x="28" y="${H - 18}" fill="${C.g500}" font-family="${MONO}" font-size="10">atualizado em ${today}</text>`
);

// ---- card 2: linguagens por volume de código nos repositórios públicos (pacotes vendored já são excluídos pelo GitHub)
const totals = new Map();
for (const repo of u.repositories.nodes) {
  if (repo.name === user) continue; // repositório do perfil não é projeto
  for (const e of repo.languages.edges) {
    const t = totals.get(e.node.name) ?? { size: 0, color: e.node.color };
    t.size += e.size;
    totals.set(e.node.name, t);
  }
}
const sum = [...totals.values()].reduce((a, t) => a + t.size, 0) || 1;
const langs = [...totals.entries()].sort((a, b) => b[1].size - a[1].size).slice(0, 6);
const shades = [C.red, "#B3B3B3", "#8C2238", "#6E6E6E", "#E6E6E6", "#4A4A4A"];
let x = 28;
const barW = W - 56;
const seg = langs
  .map(([, t], i) => {
    const w = (t.size / sum) * barW;
    const r = `<rect x="${x.toFixed(2)}" y="62" width="${w.toFixed(2)}" height="10" fill="${shades[i]}"/>`;
    x += w;
    return r;
  })
  .join("");
const legend = langs
  .map(([name, t], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const lx = 28 + col * 220, ly = 104 + row * 26;
    return `<circle cx="${lx + 5}" cy="${ly - 5}" r="5" fill="${shades[i]}"/><text x="${lx + 18}" y="${ly}" fill="${C.g300}" font-family="${SANS}" font-size="14">${esc(name)} <tspan fill="${C.white}" font-weight="700">${((t.size / sum) * 100).toFixed(1).replace(".", ",")}%</tspan></text>`;
  })
  .join("\n  ");
const languages = frame(
  "Linguagens mais usadas",
  `Por volume de código nos repositórios públicos: ${langs.map(([n, t]) => `${n} ${((t.size / sum) * 100).toFixed(1)}%`).join(", ")}.`,
  `  <clipPath id="bar"><rect x="28" y="62" width="${barW}" height="10" rx="5"/></clipPath>
  <g clip-path="url(#bar)">${seg}</g>
  ${legend}
  <text x="28" y="${H - 18}" fill="${C.g500}" font-family="${MONO}" font-size="10">repositórios públicos · sem pacotes de terceiros</text>`
);

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/atividade.svg`, activity);
writeFileSync(`${outDir}/linguagens.svg`, languages);
console.log("cards gerados:", rows, langs.map(([n, t]) => [n, t.size]));
