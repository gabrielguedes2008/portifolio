# Especificação do portfólio — Gabriel Guedes

## Objetivo e estado

Reproduzir a composição das referências usando os arquivos originais de `imagens/`. A primeira implementação está em `index.html`, `styles.css` e `script.js`. Nenhuma imagem foi gerada ou modificada.

As capturas mostram um editor, em escalas diferentes. O fundo cinza externo e os rótulos “Frame 28”, “Frame 33”, “Frame 34”, “Frame 35” e “Frame 37” pertencem ao editor e não fazem parte do site.

As medidas de referência abaixo foram normalizadas para **1440 px**, pois as capturas não informam a largura original dos frames. A pedido do usuário, a implementação passou a preencher **100% da largura do navegador**, com conteúdo responsivo independente; não fica mais limitada a um quadro de 1440 px. Os valores de referência não são CSS extraído do arquivo original. O usuário confirmou Poppins e autorizou os ícones em SVG/CSS. A equivalência pixel a pixel ainda não está certificada.

## Referências

| Arquivo em `ref/` | Dimensões | Conteúdo |
| --- | --- | --- |
| `Screenshot 2026-10-19 171720.png` | 257 × 698 | Composição completa |
| `Screenshot 2026-10-19 172434.png` | 902 × 611 | Cabeçalho, apresentação e ferramentas |
| `Screenshot 2026-10-19 172450.png` | 927 × 902 | Projetos recentes |
| `Screenshot 2026-10-19 172504.png` | 998 × 900 | Habilidades e motivos para contratar |
| `Screenshot 2026-10-19 172507.png` | 1011 × 463 | Contato e rodapé |

## Sistema visual

| Propriedade | Valor adotado | Observação |
| --- | --- | --- |
| Fundo de projetos | `#0b0b0b` | Aproximação visual |
| Fundo de habilidades/sobre | `#000000` | Preto |
| Faixa de ferramentas | `#191919` | Aproximação visual |
| Cards de habilidades | `#211f1f` | Aproximação visual |
| Texto principal | `#ffffff` | Branco |
| CTA de habilidades | `#ff1010` | Vermelho |
| Texto do CTA do rodapé | `#ae1f23` | Vermelho sobre branco |
| Fonte | Poppins, fallback Arial | Confirmada pelo usuário; Google Fonts |
| Pesos | 300, 400, 500, 600, 700, 800 | Conforme hierarquia observada |
| Largura da página | 100% do navegador | Sem largura máxima nas seções e fundos |
| Largura interna dos grids | Até 1120 px ou 84% da tela | Conteúdo centralizado, com margens responsivas |
| Breakpoint mobile/tablet | 900 px | Adaptação; não há referência mobile |

Os fundos da apresentação e do contato usam os PNGs fornecidos. Não reconstruir seus gradientes manualmente.

## 1. Apresentação e ferramentas

- Hero: 1440 × 810 px; imagem em `cover`, centralizada; raios inferiores de 120 px.
- Cabeçalho: altura de 96 px; recuos laterais próximos de 82 px.
- Marca: **GABRIEL GUEDES**, 26 px, peso 800.
- Navegação: **PROJETOS**, **HABILIDADES**, **SOBRE-MIM**, 18 px; rolam até as respectivas seções.
- Marca, três links e contato compartilham um único contêiner flex no desktop, com `justify-content: space-between` e alinhamento vertical central. O espaço livre é dividido igualmente entre os cinco itens, sem uma lacuna extra antes do contato. As margens laterais variam de 32 a 112 px. Até 900 px, a marca ocupa a primeira linha e os três links ficam em colunas iguais ao lado do contato na segunda linha.
- Os cinco itens da navegação entram em sequência com fade e deslocamento de 10 px durante 750 ms, separados por atrasos de 80 ms. No hover, sobem suavemente 2 px, com transição de 250 ms. Um brilho discreto em CSS se move lentamente sobre o fundo do hero em ciclos alternados de 12 segundos. Links recebem sublinhado animado no hover/foco. Todas essas animações respeitam a preferência por redução de movimento.
- **CONTATO**: cápsula branca, texto vinho de 28 px; abre WhatsApp.
- Apresentação: x=60, y=192 px aproximadamente; **Olá, eu sou**, 44 px; **Desenvolvedor / Web**, 96 px, peso 700, altura de linha 1,47.
- Texto à direita: x=1006, y=456 px aproximadamente; **Um bom design deve / ser visivel**, 32 px, peso 700; **Construo Sites que convertem em / vendas.**, 22 px, peso 300.
- Faixa de ferramentas: altura de 246 px; raios inferiores de 120 px.
- O bloco de apresentação compartilha o fundo `#191919` da faixa de ferramentas, que continua por trás dos cantos arredondados do hero. O arredondamento externo inferior pertence ao bloco completo (120 px no desktop e 48 px no mobile), formando duas camadas visualmente unidas, sem recorte preto entre elas.
- O fundo do contêiner principal usa `#0b0b0b`, a mesma cor da seção de projetos. Essa cor continua atrás das curvas inferiores da faixa de ferramentas, eliminando os recortes pretos entre a apresentação e os projetos.
- Ordem: **Trabalhando / Com:**, Figma, Vercel, Codex, Photoshop; textos de 32 px, peso 700.
- Imagem do hero: `Moody Orange-Rimmed Profile Portrait.png`.
- Sobre o fundo, 38 partículas pequenas em tons quentes sobem com deriva lateral e fade, em ciclos independentes de 18 a 38 segundos (22 partículas no mobile). A camada fica abaixo dos textos, não recebe cliques e não altera a imagem original. As animações pausam quando o hero sai da tela ou a aba fica oculta; a preferência por redução de movimento oculta as partículas. Efeito feito em HTML/CSS/JavaScript, sem gerar arquivos de imagem ou usar bibliotecas externas.

## 2. Projetos Recentes

- Fundo `#0b0b0b`; padding superior de 96 px e inferior de 176 px.
- Título centralizado: 60 px, peso 700.
- Grid de duas colunas: largura total de 870 px; gap horizontal de 44 px e vertical de 28 px; margem superior de 92 px.
- Imagens de aproximadamente 413 × 376 px, preservando a proporção original.
- Rótulos: 30 px, peso 700; subtítulo **Website/Design**, 11 px, peso 300.

| Posição | Rótulo | Projeto | Arquivo em `imagens/` |
| --- | --- | --- | --- |
| 1, esquerda | Imobiliaria | Vértice | `Minimalist Vértice Logo Presentation.png` |
| 1, direita | Advocacia | Averon | `Averon Advocacia Logo on Burgundy.png` |
| 2, esquerda | Restaurante | Bravo | `Bravo Parrilla & Bar Logo.png` |
| 2, direita | Psicologia | Psico•C | `Psico•C Logo on a Soft Lavender Gradient.png` |
| 3, esquerda | Marcenaria | Cemá | `Cemá_ Warm Minimalist Wordmark.png` |
| 3, direita | Odontologia | Orvia | `Orvia Odontologia Logo Presentation.png` |

Ao passar o mouse ou dar foco pelo teclado, a imagem escurece (`brightness(.48)`), recebe blur de 3 px e exibe seta com **Veja mais**. Transição de aproximadamente 280 ms, desativada para quem prefere redução de movimento.

Os links reais ainda não foram fornecidos. Até serem configurados em `portfolioLinks.projects`, o clique abre um diálogo informativo, com fechamento por botão, Escape ou clique fora. Não redirecionar para um site inventado. Após configurar as URLs, abrir em nova aba com `noopener,noreferrer`.

## 3. Minhas Habilidades

- Fundo preto; título de 60 px, peso 700; padding superior de 88 px.
- Dois cards superiores de 450 × 264 px, gap horizontal de 94 px.
- Terceiro card centralizado abaixo, gap vertical de 42 px.
- Fundo dos cards `#211f1f`; padding de 18 px; ícones próximos de 44 px.
- Títulos de 22 px, peso 500; descrições de 16 px, peso 300, altura de linha 1,45.

| Título | Descrição transcrita |
| --- | --- |
| Desenvolvimento Web | Criação de sites funcionais, responsivos e interativos, utilizando tecnologias como HTML, CSS e JavaScript. |
| Design de Sites | Desenvolvimento de interfaces modernas, intuitivas e atraentes, focadas na experiência do usuário e na usabilidade. |
| Design Gráfico | Criação de identidades visuais, elementos gráficos e materiais digitais que comunicam ideias de forma criativa e profissional. |

CTA **Contate Agora** centralizado, vermelho com texto branco, 28 px, peso 700, separado dos cards por 52 px; abre WhatsApp.

## 4. Por que me Escolher?

- Fundo preto; padding superior de 98 px e inferior de 160 px.
- Título de 60 px, centralizado; distância de 50 px até o conteúdo.
- Coluna textual de 376 px, distância de 140 px para a imagem de 428 × 428 px.
- Títulos de 24 px, peso 300; descrições de 20 px, peso 300, altura de linha 1,5.
- Imagem: `Cinematic Red-Themed Web Studio Mockup.png`.
- Exibição da imagem: proporção quadrada de 1:1, largura responsiva de até 550 px (360 px no mobile), com `height: auto` para neutralizar a altura intrínseca do atributo HTML. Usar `object-fit: contain` para preservar a composição inteira, sem recorte vertical.

| Item | Descrição transcrita |
| --- | --- |
| (01) Ideias Criativas | Criatividade para traduzir sua essência em um visual marcante. |
| (02) Expert nas Ferramentas | Domínio das ferramentas para transformar boas ideias em trabalhos bem executados. |
| (03) Os Resultados Aparecem | Cada escolha visual conecta sua mensagem ao público e aos seus objetivos. |

## 5. Contato e rodapé

- Altura de aproximadamente 714 px; fundo `Moody Crimson Vignette.png`, centralizado em `cover`.
- Título: **VAMOS CONSTRUIR ALGO / INCRIVEL JUNTOS**, 40 px, peso 700, altura de linha 1,5; distância superior de 114 px.
- CTA **ME CONTATE AGORA**: fundo branco, texto vermelho, 32 px, peso 700; margem superior de 80 px.
- No hover ou foco por teclado, duas camadas curvas em tons de vermelho sobem pelo CTA como uma onda durante 850 ms, preenchendo o fundo e mudando o texto para branco. Ao sair, o preenchimento recua. O efeito usa apenas CSS, preserva o destino do WhatsApp e respeita a preferência por redução de movimento.
- Linha inferior de 648 px, centralizada: **CONTATO RÁPIDO** e telefone à esquerda; LinkedIn, Facebook e Instagram à direita.
- Telefone exibido: **(11) 91499-1835**.
- Destino dos contatos: **https://wa.me/5511914991835**, em nova aba. Abre a conversa, sem enviar mensagem automaticamente.
- Copyright: **Copyright ©Gabriel Guedes. All Rights Reserved**, centralizado junto à base, 11 px.
- Redes sociais pendentes, configuráveis em `portfolioLinks.socials`; até lá, exibir diálogo ao clicar.

## Inventário das imagens originais

| Arquivo | Dimensões |
| --- | --- |
| `Averon Advocacia Logo on Burgundy.png` | 1315 × 1196 |
| `Bravo Parrilla & Bar Logo.png` | 1315 × 1196 |
| `Cemá_ Warm Minimalist Wordmark.png` | 1315 × 1196 |
| `Cinematic Red-Themed Web Studio Mockup.png` | 1254 × 1254 |
| `Minimalist Vértice Logo Presentation.png` | 1315 × 1197 |
| `Moody Crimson Vignette.png` | 1672 × 941 |
| `Moody Orange-Rimmed Profile Portrait.png` | 1672 × 941 |
| `Orvia Odontologia Logo Presentation.png` | 1315 × 1196 |
| `Psico•C Logo on a Soft Lavender Gradient.png` | 1316 × 1195 |

## Responsividade e acessibilidade

As seções e seus fundos preenchem toda a largura do navegador. A tipografia tem tamanhos responsivos, sem reduzir a página inteira como uma imagem. No desktop, a altura do hero é `clamp(680px, 90svh, 1000px)`, e seus textos ficam ancorados às margens. Até 900 px, cabeçalho e hero são reorganizados, ferramentas ficam em duas colunas, projetos continuam em duas colunas e habilidades/sobre ficam em uma coluna. A adaptação mobile não é extraída dos prints.

Títulos, projetos, habilidades, motivos e chamadas de contato aparecem uma vez ao entrar na área visível, com fade e deslocamento vertical de 32 px durante 800 ms. Os cards têm um pequeno intervalo alternado. Sem JavaScript ou IntersectionObserver, todo o conteúdo permanece visível. O foco pelo teclado também revela os elementos.

A navegação por links internos usa rolagem animada com aceleração e desaceleração durante 700 a 1400 ms, conforme a distância. Roda do mouse, toque e teclas de rolagem interrompem essa animação. A preferência por redução de movimento desativa tanto a rolagem animada quanto as entradas.

Incluir textos alternativos, navegação por teclado, foco visível, link para pular ao conteúdo e suporte a redução de movimento. Estados interativos não alteram os arquivos originais.

## Pendências e validação

- Fonte Poppins confirmada pelo usuário; aplicada na implementação.
- Ícones em SVG/CSS aprovados pelo usuário; manter as versões da implementação.
- Receber as seis URLs dos projetos e os três links de redes sociais.
- A largura fixa do frame deixou de ser requisito: o usuário solicitou página ocupando 100% do navegador.
- Comparação visual no navegador pendente: não há navegador disponível no inventário de automação deste ambiente. O servidor local respondeu HTTP 200 e os scripts passaram na checagem de sintaxe.
- Antes de declarar equivalência exata, comparar capturas na mesma largura, verificar quebras de linha, medidas, cores e alinhamentos e corrigir diferenças observadas.
