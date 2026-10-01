export function formatarCPF(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return valor;
}

export function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    return valor;
}

export function formatarCEP(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.slice(0, 8);

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    return valor;
}

export function atualizarMensagemCampo(campo) {
    let mensagem = campo.nextElementSibling;

    if (!mensagem || !mensagem.classList.contains("mensagem-campo")) {
        mensagem = document.createElement("small");
        mensagem.classList.add("mensagem-campo");
        campo.insertAdjacentElement("afterend", mensagem);
    }

    if (campo.validity.valid) {
        mensagem.textContent = "Preenchimento válido.";
        mensagem.classList.remove("mensagem-erro");
        mensagem.classList.add("mensagem-sucesso");
    } else {
        mensagem.textContent = "Verifique o preenchimento deste campo.";
        mensagem.classList.remove("mensagem-sucesso");
        mensagem.classList.add("mensagem-erro");
    }
}