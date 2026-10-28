# Kobra Links

Página estática responsiva criada a partir do PSD original de 1080 × 1920 px. As fotografias, os ícones e o logotipo vêm da arte fornecida. Os textos são HTML editável. Não exige instalação de bibliotecas para funcionar.

## Visualizar

Abra `index.html` diretamente no navegador. Todos os recursos e scripts são locais e funcionam também dessa forma.

Para uma prévia por HTTP, execute `INICIAR-PREVIEW.cmd` e abra **http://127.0.0.1:4173/**. O iniciador usa o Python instalado. Feche a janela ou pressione Ctrl+C para encerrar.

## Editar os links

Altere apenas os valores em `js/links.js`. Há nove destinos: `whatsapp`, `site`, `instagram`, `facebook`, `videos`, `blog`, `tiktok`, `linkedin` e `dosatak`. O endereço de `dosatak` está pendente de envio pelo usuário. Os quatro ícones do rodapé reutilizam os destinos correspondentes dos cartões.

Os endereços foram fornecidos pelo usuário em 27/10/2026, incluindo a mensagem completa de WhatsApp para Criação Animal. Nenhum número ou endereço foi inferido. Todos os destinos abrem em nova aba com `noopener noreferrer`. Deixar um valor vazio mantém o destino pendente e exibe um aviso ao clique.

## Arquivos

- `index.html`: conteúdo, estrutura semântica, SEO e compartilhamento.
- `css/style.css`: layout, responsividade e interações.
- `js/links.js`: destinos oficiais editáveis.
- `js/main.js`: aplicação dos links e aviso de destino pendente.
- `assets/`: recursos gráficos e fonte Inter local com licença OFL.
- `screenshots/`: capturas de página inteira nas larguras solicitadas.
- `reference/`: inventário de camadas, referência e relatório de validação.
- `tools/`: utilitários usados no desenvolvimento; não são necessários para publicar.

## Publicar

Copie `index.html`, `css/`, `js/` e `assets/` para uma hospedagem de páginas estáticas, preservando essa estrutura. Não há etapa de compilação, banco de dados, instalação de dependências ou servidor de aplicação.

O arquivo `KOBRA-LINKS.zip` contém a página pronta para distribuição, o iniciador, estas instruções e as capturas. Extraia antes de abrir `index.html`.

Depois de definir o endereço público, configure em `index.html` o endereço absoluto de `og:image` e acrescente `og:url` e um link `rel="canonical"` com a URL definitiva. O endereço público não foi inventado. A página foi criada localmente; nenhuma hospedagem foi configurada.

## Integração posterior ao Framer

O layout usa HTML, CSS e JavaScript independentes. Pode ser hospedado e incorporado por URL, ou adaptado para um componente de código do Framer, mantendo os recursos e as regras visuais. O projeto não altera um site ou CMS existente.

## Fidelidade e adaptações

O PSD tem **1080 × 1920 px**, confirmado no arquivo e no Photoshop. A medida 2260 px citada no documento corresponde à extensão de camadas de fundo além da prancheta, não à largura do layout final.

O fundo e as seis fotografias com as sobreposições foram exportados pelo Photoshop usando uma cópia temporária. O PSD original não foi salvo nem modificado. Os ícones dos cartões foram recortados da composição original para preservar todos os efeitos. O círculo e a sombra do logotipo foram reconstruídos em CSS. A seta foi reconstruída em SVG a partir da geometria da arte, evitando os efeitos de transparência incorretos da exportação isolada.

Nos celulares, os cartões ficam mais altos proporcionalmente para preservar a leitura, com fotos recortadas à direita e sobreposição adicional atrás dos textos. As quebras de linha se adaptam ao espaço. Em tablet e desktop, as proporções seguem a prancheta e o conteúdo fica centralizado, limitado a 1080 px. Pode haver pequenas diferenças de suavização da fonte e sombra entre navegador e Photoshop.

## Validação

Foram verificadas as larguras **320, 375, 390, 430, 768, 1024 e 1440 px**, além de **1080 px** para comparação com o PSD. As capturas estão em `screenshots/`; o relatório detalhado fica em `reference/validation.json` no projeto de desenvolvimento.

As verificações cobrem ausência de rolagem horizontal, carregamento de imagens e fontes, nove cartões (oito com destino configurado e Dosatak pendente), os doze links ativos dos cartões e do rodapé, foco por teclado, redução de movimento, navegação em nova aba e comportamento de links pendentes. Os destinos foram conferidos contra as URLs fornecidas; a disponibilidade e o login dos serviços externos dependem dos respectivos provedores. Nenhuma mensagem de WhatsApp foi enviada durante os testes.

## Novos cartões TikTok e LinkedIn

Acrescentados após os seis cartões originais, conforme solicitado pelo usuário. Reutilizam as fotografias originais de Instagram e Site, respectivamente, e o mesmo layout, tipografia e efeitos dos cartões existentes. Os símbolos das duas marcas são SVGs do Font Awesome Free, adaptados ao círculo azul da página. A licença e a atribuição estão em `assets/icons/FONT-AWESOME-LICENSE.txt`. Não é necessário editar o PSD para manter esses cartões.

## Manutenção Dosatak

Bloco adicionado imediatamente após LinkedIn, conforme a arte `LINKS-KOBRA -DOSATAK.psd` fornecida pelo usuário. A composição desktop aprovada foi preservada. No celular, usa os três PNGs enviados em 28/10/2026, ampliados e sobrepostos: amarelo à frente à esquerda, branco ao centro e preto à direita. O enquadramento corta intencionalmente as extremidades dos produtos nas bordas do cartão, conforme a referência mais recente do usuário. A versão com produtos inteiros foi rejeitada e substituída. Todos os nove cartões compartilham exatamente a mesma altura em cada largura de tela. Cores, textos e seta acompanham a arte amarela. O destino `dosatak` em `js/links.js` está vazio até o usuário enviar a URL; ao clicar, a página informa que o link estará disponível em breve.
