/* JavaScript para exibir a data, hora e saudação na página HTML */

// Função para atualizar a data, hora e saudação
function updateTime() {
    // Seleciona os elementos HTML para data, hora e saudação
    const dateTimeElement = document.querySelector('.datetime');
    const dateElement = document.querySelector('#date');
    const timeElement = document.querySelector('#time');
    const greetingElement = document.querySelector('#greeting');
    const img = document.getElementById('imagem'); // Seleciona a imagem
  
    // Obtém a hora atual
    const horaAtual = new Date();
    const hora = horaAtual.getHours();
  
    let saudacao = "";
  
    // Determina a saudação com base na hora do dia
    if (hora >= 5 && hora < 12) {
      saudacao = "Bom dia!";
      img.src = 'https://images.unsplash.com/photo-1614174485351-42f21678b998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80';
      document.body.style.background = '#a7a7a7'; // Altera a cor de fundo do corpo
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde!";
      img.src = 'https://images.unsplash.com/photo-1622651491473-ff3824d12768?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';
      document.body.style.background = '#DA9707'; // Altera a cor de fundo do corpo
    } else if (hora >= 18 && hora <= 23) {
      saudacao = "Boa noite!";
      img.src = 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80';
      document.body.style.background = '#4f759b'; // Altera a cor de fundo do corpo
    } else {
      saudacao = "Boa madrugada!";
      img.src = 'https://images.unsplash.com/photo-1531263348817-2a52ea675d96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1268&q=80';
      document.body.style.background = '#571f4e'; // Altera a cor de fundo do corpo
    }
  
    // Formata a data e a hora
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = horaAtual.toLocaleDateString('pt-BR', options);
    const horaFormatada = horaAtual.toLocaleTimeString();
  
    // Atualiza os elementos HTML com a data, hora e saudação
    dateElement.textContent = `Hoje é ${dataFormatada}.`;
    timeElement.textContent = `São ${horaFormatada}.`;
    greetingElement.textContent = saudação;
  
    // Exibe a div com a data, hora e saudação
    dateTimeElement.style.display = 'block';
  }
  
  // Chama a função updateTime() para exibir inicialmente os dados
  updateTime();
  
  // Atualiza a função updateTime() a cada segundo para manter a hora atualizada
  setInterval(updateTime, 1000);
  