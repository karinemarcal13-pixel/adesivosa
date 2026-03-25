document.addEventListener("DOMContentLoaded", () => {

  const elementos = document.querySelectorAll("section");

  function animar() {
    let topoTela = window.innerHeight;

    elementos.forEach(el => {
      let posicao = el.getBoundingClientRect().top;

      if (posicao < topoTela - 100) {
        el.classList.add("mostrar");
      }
    });
  }

  window.addEventListener("scroll", animar);
  animar();

  const campoWhatsapp = document.querySelector("input[name='whatsapp']");

  campoWhatsapp.addEventListener("input", function(e) {
    let v = e.target.value.replace(/\D/g, "");

    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = v;
  });

});

function enviarWhatsApp(nome, tipo, mensagem) {
  let texto = `Olá! Me chamo ${nome}. Quero um orçamento para ${tipo}. ${mensagem}`;
  let url = `https://wa.me/5543998721117?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

function validarFormulario(e) {
  e.preventDefault();

  let nome = document.querySelector("input[name='nome']").value.trim();
  let whatsapp = document.querySelector("input[name='whatsapp']").value.trim();
  let tipo = document.querySelector("select[name='tipo']").value;
  let mensagem = document.querySelector("textarea[name='mensagem']").value;

  if (!nome || !whatsapp) {
    alert("Preencha nome e WhatsApp!");
    return;
  }

  enviarWhatsApp(nome, tipo, mensagem);
}

function abrirImagem(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("img-ampliada").src = img.src;
}

function fecharImagem() {
  document.getElementById("lightbox").style.display = "none";
}