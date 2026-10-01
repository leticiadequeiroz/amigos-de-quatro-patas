import {
    obterCadastros,
    salvarCadastro
} from "./armazenamento.js";

import {
    formatarCPF,
    formatarTelefone,
    formatarCEP,
    atualizarMensagemCampo
} from "./formulario.js";

import {
    paginas
} from "./paginas.js";

const conteudoPrincipal = document.getElementById("conteudo-principal");

function carregarPagina() {
    const pagina = window.location.hash.replace("#", "") || "inicio";

    const conteudo = paginas[pagina] || paginas.inicio;

    conteudoPrincipal.innerHTML = "";
    conteudoPrincipal.innerHTML = conteudo;

    conteudoPrincipal.classList.remove("grid-principal");

    if (pagina === "projetos") {
        conteudoPrincipal.classList.add("grid-principal");
    }

    if (pagina === "cadastro") {
        const cadastros = obterCadastros();
        const formulario = conteudoPrincipal.querySelector("form");

        const historico = document.createElement("p");

        historico.id = "historico-cadastros";
        historico.textContent =
            "Cadastros armazenados neste navegador: " + cadastros.length;

        formulario.insertAdjacentElement("beforebegin", historico);
    }
}

window.addEventListener("hashchange", carregarPagina);

carregarPagina();

conteudoPrincipal.addEventListener("submit", function (evento) {
    if (evento.target.matches("form")) {
        evento.preventDefault();

        const formulario = evento.target;

        if (formulario.checkValidity()) {
            const cadastro = {
                nome: formulario.nome.value,
                email: formulario.email.value,
                nascimento: formulario.nascimento.value,
                cpf: formulario.cpf.value,
                telefone: formulario.telefone.value,
                cep: formulario.cep.value,
                endereco: formulario.endereco.value,
                cidade: formulario.cidade.value,
                estado: formulario.estado.value,
                participacao: formulario.participacao.value
            };

            salvarCadastro(cadastro);

            const historico = document.getElementById("historico-cadastros");
            const cadastros = obterCadastros();

            historico.textContent =
                "Cadastros armazenados neste navegador: " + cadastros.length;

            const elementoModal = document.getElementById("modalCadastro");

            const modalCadastro = new bootstrap.Modal(elementoModal);

            modalCadastro.show();

            formulario.reset();
        } else {
            formulario.reportValidity();
        }
    }
});

conteudoPrincipal.addEventListener("input", function (evento) {
    if (evento.target.matches("input")) {
        const campo = evento.target;

        if (campo.id === "cpf") {
            campo.value = formatarCPF(campo.value);
        }

        if (campo.id === "telefone") {
            campo.value = formatarTelefone(campo.value);
        }

        if (campo.id === "cep") {
            campo.value = formatarCEP(campo.value);
        }

        if (campo.validity.valid) {
            campo.classList.remove("campo-invalido");
            campo.classList.add("campo-valido");
        } else {
            campo.classList.remove("campo-valido");
            campo.classList.add("campo-invalido");
        }

        atualizarMensagemCampo(campo);
    }
});

document.addEventListener("click", function (evento) {
    const linkProjeto = evento.target.closest("[data-projeto]");

    if (linkProjeto) {
        evento.preventDefault();

        const projetoId = linkProjeto.dataset.projeto;

        window.location.hash = "projetos";

        carregarPagina();

        const projeto = document.getElementById(projetoId);

        if (projeto) {
            projeto.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});