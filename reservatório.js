let volumeAtual = 0;

const limiteTanque = 1000;

const volume = document.getElementById("volume");
const alerta = document.getElementById("alerta");

const encher = document.getElementById("encher");
const resetar = document.getElementById("resetar");

const statusSistema = document.getElementById("statusSistema");

function atualizarSistema() {

    volume.textContent = `${volumeAtual} L`;

    if (volumeAtual >= limiteTanque) {

        alerta.classList.remove("oculto");

        encher.disabled = true;

        statusSistema.textContent = "ENTRADA BLOQUEADA - TANQUE CHEIO";
        statusSistema.style.color = "red";

    } else {

        alerta.classList.add("oculto");

        encher.disabled = false;

        statusSistema.textContent = "Sistema Operando Normalmente";
        statusSistema.style.color = "green";
    }
}

encher.addEventListener("click", () => {

    volumeAtual += 100;

    atualizarSistema();
});

resetar.addEventListener("click", () => {

    volumeAtual = 0;

    atualizarSistema();
});

atualizarSistema();