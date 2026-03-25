function enviarWhats(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let servico = document.getElementById("servico").value;

  if (nome === "" || servico === "") {
    alert("Preencha tudo 😅");
    return;
  }

  let numero = "5543984046323";

  let mensagem = `Olá, tudo bem?
Meu nome é ${nome}
Quero um orçamento

📍 Atendimento: Londrina e região

Serviço: ${servico}`;

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}