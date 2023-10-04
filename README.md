# Exercícios JavaScript (Parte 1)

Este repositório contém uma página da web simples que exibe a data, a hora e uma saudação com base na hora do dia. Além disso, a imagem de fundo muda de acordo com a hora atual.

## Estrutura do Projeto

O projeto é composto por três partes principais:

1. **HTML (Estrutura da Página)**:
    - A estrutura HTML define a estrutura da página da web.
    - Dentro da tag `<head>`, são definidas metatags como codificação de caracteres e configurações de exibição.
    - A tag `<title>` define o título da página exibido na guia do navegador.

2. **CSS (Estilo da Página)**:
    - O código CSS dentro das tags `<style>` é usado para definir o estilo da página, como cores de fundo, cores de texto, tamanhos de fonte, sombras e posicionamento de elementos.
    - Define estilos para o corpo da página, cabeçalho, títulos, seção e rodapé, bem como alguns outros elementos.

3. **Corpo da Página (Body)**:
    - A função `onload="updateTime()"` é chamada quando a página é carregada. Isso invoca a função `updateTime()` para exibir a data, hora e saudação atual na página.

## Componentes da Página

4. **Cabeçalho (Header)**:
    - O cabeçalho da página contém um título principal `<h1>` e um subtítulo `<h2>`.

5. **Seção (Section)**:
    - A seção principal contém um bloco de informações, incluindo a data e a hora atual, uma saudação e uma imagem.
    - A formatação da seção é definida pelo CSS e inclui um fundo colorido, arredondamento de borda e sombra.

6. **Div com a Data e Hora (Datetime)**:
    - Dentro da seção, há um elemento `<div>` com a classe `datetime` que contém parágrafos identificados como `date`, `time`, e `greeting`. Esses parágrafos são usados para exibir a data, hora e saudação atual.

7. **Imagem (Img)**:
    - Dentro da seção, há uma imagem com a classe `imagem` que exibe uma imagem de acordo com a hora do dia (amanhecer, tarde, noite, madrugada). A imagem muda com base na hora atual.

## JavaScript

8. **Javascript**:
    - A parte JavaScript começa com a função `updateTime()`.
    - Essa função obtém a hora atual, determina a saudação apropriada com base na hora do dia e formata a data e hora.
    - A imagem e o estilo de fundo da página também são atualizados com base na hora do dia.
    - As informações atualizadas são exibidas nos parágrafos correspondentes.

9. **Intervalo de Atualização**:
    - Após chamar `updateTime()` uma vez na inicialização da página, `setInterval(updateTime, 1000)` é usado para atualizar continuamente as informações a cada segundo. Isso garante que a data, hora e saudação sejam atualizadas automaticamente enquanto a página estiver aberta.


## Créditos

Este projeto foi criado como parte de exercícios de JavaScript do [CursoEmVídeo](https://www.cursoemvideo.com/).

## Licença

Este projeto está licenciado sob a licença MIT. 

