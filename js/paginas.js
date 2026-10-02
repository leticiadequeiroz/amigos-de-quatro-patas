const projetos = [
    {
        id: "resgate",
        titulo: "Resgate e acolhimento",
        categoria: "Resgate",
        descricao: "As ações de resgate buscam oferecer proteção e acolhimento aos animais que precisam de cuidados. Após o resgate, os animais recebem atenção e cuidados necessários até encontrarem uma nova oportunidade de adoção.",
        imagem: "./imagens/04_cachorro_em_recuperacao.png",
        alt: "Cachorro recebendo cuidados durante sua recuperação"
    },
    {
        id: "doacoes",
        titulo: "Doações",
        categoria: "Doação",
        descricao: "As doações contribuem para a manutenção das ações da ONG, ajudando nos cuidados, alimentação e demais necessidades dos animais acolhidos.",
        imagem: "./imagens/05_arara_resgatada.png",
        alt: "Arara resgatada pela ONG Amigos de Quatro Patas",
        botao: "Cadastre-se para ajudar",
        destino: "#cadastro"
    },
    {
        id: "voluntariado",
        titulo: "Voluntariado",
        categoria: "Voluntariado",
        descricao: "O trabalho voluntário permite que pessoas interessadas contribuam com as atividades da ONG e auxiliem nas ações de cuidado e proteção dos animais.",
        imagem: "./imagens/montagem_amigos_de_quatro_patas.png",
        alt: "Montagem com imagens relacionadas às ações da ONG Amigos de Quatro Patas",
        botao: "Quero ser voluntário",
        destino: "#cadastro"
    },
    {
        id: "adocao",
        titulo: "Adoção responsável",
        categoria: "Adoção",
        descricao: "A adoção responsável busca proporcionar aos animais um novo lar com pessoas preparadas para oferecer cuidado, proteção e bem-estar.",
        imagem: "./imagens/03_coelho_resgatado.png",
        alt: "Coelho resgatado disponível para adoção responsável",
        botao: "Tenho interesse em ajudar",
        destino: "#cadastro"
    }
];

function criarCardsProjetos() {
    return projetos.map(function (projeto) {
        return `
            <section id="${projeto.id}">
                <h2>${projeto.titulo}</h2>

                <span class="badge">
                    ${projeto.categoria}
                </span>

                <p>
                    ${projeto.descricao}
                </p>

                <img src="${projeto.imagem}"
                     alt="${projeto.alt}">

                ${projeto.botao ? `
                    <a href="${projeto.destino}" class="botao">
                        ${projeto.botao}
                    </a>
                ` : ""}
            </section>
        `;
    }).join("");
}

export const paginas = {
    inicio: `
        <section>
            <h2>Sobre a ONG</h2>

            <p>
                A Amigos de Quatro Patas é uma ONG dedicada ao
                resgate, proteção e cuidado de animais.
            </p>
        </section>

        <section>
            <h2>Nossa missão</h2>

            <p>
                Nossa missão é ajudar cães, gatos e outros animais
                que precisam de cuidado, proteção e um novo lar.
            </p>

        <img src="./imagens/nossa_missao_amigos_de_quatro_patas.png"
            alt="Imagem representando a missão da ONG Amigos de Quatro Patas">
        </section>

        <section>
            <h2>Como ajudar</h2>

            <p>
                Você pode contribuir por meio de doações,
                voluntariado e adoção responsável.
            </p>

            <a href="#cadastro">Quero ajudar</a>
        </section>

        <section>
            <h2>Contato</h2>

            <p>
                E-mail: contato@amigosdequatropatas.org
            </p>

            <p>
                Telefone: (11) 00000-0000
            </p>
        </section>
    `,

 projetos: `
    <section>
        <h2>Nossos projetos</h2>

        <p>
            A Amigos de Quatro Patas desenvolve ações voltadas ao resgate,
            acolhimento, cuidado e proteção de cães, gatos e outros animais
            em situação de vulnerabilidade.
        </p>

       <img src="./imagens/02_animais_resgatados.png"
             alt="Animais resgatados pela ONG Amigos de Quatro Patas">
    </section>

    ${criarCardsProjetos()}
`,

    cadastro: `
        <section>
            <h2>Cadastro</h2>

            <p>
                Preencha o formulário para demonstrar seu interesse em
                contribuir com as ações da Amigos de Quatro Patas.
            </p>
        </section>

        <div class="toast" role="status">
            <strong>Quer ajudar?</strong>
            Preencha o formulário abaixo e informe como deseja participar
            das ações da ONG.
        </div>

        <form action="#" method="POST">
            <fieldset>
                <legend>Informações pessoais</legend>

                <label for="nome">Nome completo:</label>
                <br>

                <input type="text"
                       id="nome"
                       name="nome"
                       required>

                <br><br>

                <label for="email">E-mail:</label>
                <br>

                <input type="email"
                       id="email"
                       name="email"
                       required>

                <br><br>

                <label for="nascimento">Data de nascimento:</label>
                <br>

                <input type="date"
                       id="nascimento"
                       name="nascimento"
                       required>

                <br><br>

                <label for="cpf">CPF:</label>
                <br>

                <input type="text"
                       id="cpf"
                       name="cpf"
                       placeholder="000.000.000-00"
                       pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                       title="O CPF deve estar no formato 000.000.000-00"
                       required>
            </fieldset>

            <br>

            <fieldset>
                <legend>Contato e endereço</legend>

                <label for="telefone">Telefone:</label>
                <br>

                <input type="tel"
                       id="telefone"
                       name="telefone"
                       placeholder="(00) 00000-0000"
                       pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                       title="O telefone deve estar no formato (00) 00000-0000"
                       required>

                <br><br>

                <label for="cep">CEP:</label>
                <br>

                <input type="text"
                       id="cep"
                       name="cep"
                       placeholder="00000-000"
                       pattern="[0-9]{5}-[0-9]{3}"
                       title="O CEP deve estar no formato 00000-000"
                       required>

                <br><br>

                <label for="endereco">Endereço:</label>
                <br>

                <input type="text"
                       id="endereco"
                       name="endereco"
                       required>

                <br><br>

                <label for="cidade">Cidade:</label>
                <br>

                <input type="text"
                       id="cidade"
                       name="cidade"
                       required>

                <br><br>

                <label for="estado">Estado:</label>
                <br>

                <input type="text"
                       id="estado"
                       name="estado"
                       required>
            </fieldset>

            <br>

            <fieldset>
                <legend>Forma de participação</legend>

                <label for="participacao">
                    Como você deseja contribuir com a ONG?
                </label>

                <br>

                <input type="text"
                       id="participacao"
                       name="participacao"
                       placeholder="Ex.: doação ou voluntariado"
                       required>
            </fieldset>

            <br>

                        <button type="submit">
                Enviar cadastro
            </button>
        </form>

        <div class="modal fade"
             id="modalCadastro"
             tabindex="-1"
             aria-labelledby="tituloModalCadastro"
             aria-hidden="true">

            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h2 class="modal-title fs-5"
                            id="tituloModalCadastro">
                            Cadastro realizado
                        </h2>

                        <button type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Fechar">
                        </button>
                    </div>

                    <div class="modal-body">
                        Cadastro salvo com sucesso.
                    </div>

                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-success"
                                data-bs-dismiss="modal">
                            Fechar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    `
};