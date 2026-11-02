<div align="center">

<img src="./assets/banner.svg" alt="Gabriel Serra. Marketing, IA, tecnologia e automação: sistemas de aquisição de clientes, do anúncio ao lead qualificado." width="100%" />

<br />

<a href="https://bielstrategy.com"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=17&duration=3200&pause=1200&color=E21D48&center=true&vCenter=true&width=640&lines=Tr%C3%A1fego+pago+que+vira+lead+qualificado;Sites+e+funis+em+Next.js+%2B+Supabase;Desenvolvimento+conduzido+com+agentes+de+IA" alt="Tráfego pago que vira lead qualificado · Sites e funis em Next.js + Supabase · Desenvolvimento conduzido com agentes de IA" /></a>

<br />

<a href="https://bielstrategy.com/"><img src="https://img.shields.io/badge/bielstrategy.com-E21D48?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Site bielstrategy.com" /></a>
<a href="https://www.linkedin.com/in/gabriel-santos-315397150/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://www.instagram.com/biel.strategy/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram @biel.strategy" /></a>
<a href="https://www.facebook.com/profile.php?id=61581976716136"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" /></a>

</div>

## Sobre

Venho do marketing de performance. Gerencio campanhas de Meta Ads e Google Ads para negócios locais e percebi que boa parte dos resultados se perdia **depois do clique**: páginas que não qualificam, leads sem origem, contatos que somem.

Por isso passei a construir a parte técnica do funil. Hoje desenvolvo sites e fluxos de captação em **Next.js, TypeScript e Supabase**, com rastreamento de campanha, qualificação em etapas e LGPD, e conduzo esse desenvolvimento **com agentes de IA**: escrevo a pesquisa e a especificação, o agente implementa, e eu valido com auditoria.

<table>
<tr>
<td width="33%" valign="top">

**Marketing e growth**

Meta Ads e Google Ads para negócios locais · funis anúncio → WhatsApp → oportunidade · atribuição com UTM e click IDs

</td>
<td width="33%" valign="top">

**Tecnologia**

Sites e landing pages em Next.js · Server Actions · Postgres com Row Level Security · validação com Zod · SEO técnico

</td>
<td width="33%" valign="top">

**IA no processo**

Claude Code para implementar · Claude Design para prototipar · Antigravity para auditar · especificações escritas para agentes

</td>
</tr>
</table>

---

## Projetos em destaque

<table>
<tr>
<td width="50%" valign="top">

### [biel-strategy](https://github.com/Gabriel-serra-eng/biel-strategy)
`em produção` · **[bielstrategy.com](https://bielstrategy.com)**

Site profissional que funciona como canal de aquisição. Formulário de pré-diagnóstico em 8 etapas que grava cada lead no Supabase com origem de campanha (`utm_*`, `gclid`, `fbclid`) e consentimento LGPD. A chave pública só consegue inserir, nunca ler, por RLS.

`Next.js 16` `TypeScript` `Supabase` `Zod` `GSAP`

</td>
<td width="50%" valign="top">

### [VYRO-web](https://github.com/Gabriel-serra-eng/VYRO-web)
`em desenvolvimento`

Site de uma agência de growth para clínicas e serviços locais. Captação com Server Action e e-mail via Resend, com fallback para WhatsApp quando o envio falha. GTM e Meta Pixel só carregam depois do consentimento.

`Next.js 15` `Tailwind 4` `Resend` `React Hook Form`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [landing-restaurante-vsl](https://github.com/Gabriel-serra-eng/landing-restaurante-vsl)
`protótipo`

Landing com VSL e formulário que escala o compromisso: perguntas leves primeiro, faturamento e orçamento depois, preço só no final. O servidor classifica o lead como Hot, Warm ou Cold e escolhe o evento de conversão.

`Next.js 16` `Tailwind 4` `Zod` `Framer Motion`

</td>
<td width="50%" valign="top">

### Case de tráfego · Cássia Beleza & Cachos
`Meta Ads` · **[ver no site](https://bielstrategy.com)**

Estruturação e gestão da campanha de Meta Ads de um salão, da segmentação aos criativos, com funil anúncio → clique → WhatsApp → oportunidade. **129 contatos iniciados pelo WhatsApp** a partir dos anúncios.

`Meta Ads` `WhatsApp` `Funil local`

</td>
</tr>
</table>

---

## IA no meu processo de desenvolvimento

Uso agentes de IA em etapas definidas, e cada etapa deixa um documento no repositório. Nenhum destes projetos chama um modelo em tempo de execução: a IA está na **construção**, não dentro do produto.

| Etapa | Ferramenta | Evidência |
|---|---|---|
| Pesquisa e fonte de verdade do conteúdo | Apoio de IA na organização | [`RESEARCH.md`](https://github.com/Gabriel-serra-eng/biel-strategy/blob/master/RESEARCH.md) |
| Protótipo visual | Claude Design | Design tokens do `biel-strategy` |
| Contrato técnico para o agente | Escrito antes do código | [`IMPLEMENTATION.md`](https://github.com/Gabriel-serra-eng/biel-strategy/blob/master/IMPLEMENTATION.md) |
| Implementação | Claude Code | 40 commits com co-autoria registrada |
| Pesquisa de arquitetura | Agente de pesquisa, com fontes citadas | [`LEAD_SYSTEM_RESEARCH.md`](https://github.com/Gabriel-serra-eng/biel-strategy/blob/master/LEAD_SYSTEM_RESEARCH.md) |
| Auditoria do que foi implementado | Antigravity | [`SITE_PROJECT_CONTEXT_ANTIGRAVITY.md`](https://github.com/Gabriel-serra-eng/biel-strategy/blob/master/SITE_PROJECT_CONTEXT_ANTIGRAVITY.md) |

---

## Ferramentas

<table>
<tr><td width="24%"><b>Inteligência Artificial</b></td><td>

![Claude Code](https://img.shields.io/badge/Claude_Code-1a1a1a?style=flat-square&logo=claude&logoColor=E21D48)
![Claude Design](https://img.shields.io/badge/Claude_Design-1a1a1a?style=flat-square&logo=claude&logoColor=E21D48)
![Antigravity](https://img.shields.io/badge/Antigravity-1a1a1a?style=flat-square&logo=google&logoColor=E21D48)
![ChatGPT](https://img.shields.io/badge/ChatGPT-1a1a1a?style=flat-square&logo=openai&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-1a1a1a?style=flat-square&logo=googlegemini&logoColor=white)
![Google AI Studio](https://img.shields.io/badge/AI_Studio-1a1a1a?style=flat-square&logo=google&logoColor=white)

<sub>Destacadas em vermelho: usadas no desenvolvimento dos projetos acima. As demais: uso no dia a dia, para pesquisa e copy.</sub>
</td></tr>
<tr><td><b>Desenvolvimento</b></td><td>

<img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,nodejs,tailwind&theme=dark" alt="TypeScript, JavaScript, React, Next.js, Node.js, Tailwind" height="40" />

</td></tr>
<tr><td><b>Marketing digital</b></td><td>

![Meta Ads](https://img.shields.io/badge/Meta_Ads-1a1a1a?style=flat-square&logo=meta&logoColor=white)
![Google Ads](https://img.shields.io/badge/Google_Ads-1a1a1a?style=flat-square&logo=googleads&logoColor=white)
![Google Tag Manager](https://img.shields.io/badge/Tag_Manager-1a1a1a?style=flat-square&logo=googletagmanager&logoColor=white)
![Meta Pixel](https://img.shields.io/badge/Meta_Pixel-1a1a1a?style=flat-square&logo=meta&logoColor=white)
![GA4](https://img.shields.io/badge/GA4_(estudando)-1a1a1a?style=flat-square&logo=googleanalytics&logoColor=white)

</td></tr>
<tr><td><b>Dados e infraestrutura</b></td><td>

<img src="https://skillicons.dev/icons?i=supabase,postgres,git,github&theme=dark" alt="Supabase, Postgres, Git, GitHub" height="40" />

![Resend](https://img.shields.io/badge/Resend-1a1a1a?style=flat-square&logo=resend&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-1a1a1a?style=flat-square&logo=zod&logoColor=white)

</td></tr>
</table>

---

## Atividade

<p>
  <img src="https://raw.githubusercontent.com/Gabriel-serra-eng/Gabriel-serra-eng/output/atividade.svg" alt="Atividade no GitHub nos últimos 12 meses: contribuições, commits, pull requests e repositórios públicos, com gráfico semanal" width="49%" />
  <img src="https://raw.githubusercontent.com/Gabriel-serra-eng/Gabriel-serra-eng/output/linguagens.svg" alt="Linguagens mais usadas nos repositórios públicos" width="49%" />
</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Gabriel-serra-eng/Gabriel-serra-eng/output/snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Gabriel-serra-eng/Gabriel-serra-eng/output/snake-light.svg" />
  <img alt="Cobrinha percorrendo o gráfico de contribuições do GitHub" src="https://raw.githubusercontent.com/Gabriel-serra-eng/Gabriel-serra-eng/output/snake-dark.svg" width="100%" />
</picture>

---

<div align="center">

**Quer conversar sobre um projeto ou uma vaga?**

[![bielstrategy.com](https://img.shields.io/badge/bielstrategy.com-E21D48?style=for-the-badge&logo=googlechrome&logoColor=white)](https://bielstrategy.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-santos-315397150/)
[![Instagram](https://img.shields.io/badge/@biel.strategy-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/biel.strategy/)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=61581976716136)

</div>
