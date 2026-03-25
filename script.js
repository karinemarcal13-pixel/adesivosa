// 🔥 CONFIGURA SEU NÚMERO
const numeroWhats = "5543984046323";

// 🚀 FUNÇÃO PRINCIPAL WHATS
function enviarWhats(tipo = "") {
  let mensagem = "Olá, vim pelo site e quero um orçamento de adesivos";

  if (tipo === "cozinha") {
    mensagem = "Olá, quero renovar minha cozinha com adesivo";
  } 
  else if (tipo === "geladeira") {
    mensagem = "Olá, quero envelopar minha geladeira";
  } 
  else if (tipo === "moveis") {
    mensagem = "Olá, quero renovar meus móveis";
  }

  const link = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

// 🎯 BOTÕES
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    enviarWhats();
  });
});

// 💬 BOTÃO FLUTUANTE
const botao = document.querySelector(".whatsapp");
if (botao) {
  botao.addEventListener("click", function(e) {
    e.preventDefault();
    enviarWhats();
  });
}

// 🧠 CARDS INTELIGENTES (vende mais)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const texto = card.innerText.toLowerCase();

    if (texto.includes("cozinha")) enviarWhats("cozinha");
    else if (texto.includes("geladeira")) enviarWhats("geladeira");
    else enviarWhats("moveis");
  });
});

// ✨ ANIMAÇÃO AO ROLAR (efeito profissional)
const elementos = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

elementos.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});

// ⏳ BOTÃO WHATS APARECE DEPOIS DE 3s (gatilho)
setTimeout(() => {
  if (botao) {
    botao.style.display = "block";
  }
}, 3000);

// 🔥 ALERTA DE CONVERSÃO (simula cliente)
setTimeout(() => {
  alert("🔥 Promoção: peça seu orçamento agora e renove sem sujeira!");
}, 8000);