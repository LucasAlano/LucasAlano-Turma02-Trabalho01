const Biblioteca = require('../src/Trabalho01Turma02');

describe('Biblioteca', () => {
    
    let biblioteca;
    let livro1, livro2, livro3;
    let membro1, membro2;

    beforeEach(() => {
        biblioteca = new Biblioteca();

        // Adicionando Exemplo de Livros
        livro1 = { id: 1, titulo: 'Rápido e Devagar', autor: 'Autor X', genero: 'Hábitos', ano: 2020, emprestado: false };
        livro2 = { id: 2, titulo: 'O homem mais rico da Babilonia', autor: 'Autor Y', genero: 'Finanças', ano: 2021, emprestado: false };
        livro3 = { id: 3, titulo: 'Os 7 habitos das pessoas altamentes eficazes', autor: 'Autor Z', genero: 'Habitos', ano: 2019, emprestado: false };

        // Adicionando Exemplos de Membros
        membro1 = { id: 1, nome: 'Membro 1' };
        membro2 = { id: 2, nome: 'Membro 2' };

        // Adicionando Itens a biblioteca
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);
    });


    test('deve adicionar um livro à biblioteca', () => {
        const livro4 = { id: 4, titulo: 'Habitos Atomicos', autor: 'Autor A', genero: 'Habitos', ano: 2010, emprestado: false };
        biblioteca.adicionarLivro(livro4);
        expect(biblioteca.listarLivros()).toContain(livro4);
    });

    test('Deve Remover um livro à biblioteca', () => {
        biblioteca.removerLivro(livro3.id);
        expect(biblioteca.listarLivros()).not.toContain(livro3);
    })

    test('Deve retorna um livro que seja buscado por ID', () => {
        const livro = biblioteca.buscarLivroPorId(livro2.id);
        expect(livro).toBe(livro2);
    })

    test('Deve retornar um livro cuja busca sejá feita pelo Título', () => {
        const livro = biblioteca.buscarLivroPorTitulo(livro1.titulo);
        expect(livro).toEqual([livro1]);
    })

    test('Deve listar todos os livros da biblioteca', () => {
        const livros = biblioteca.listarLivros();
        expect(livros).toEqual([livro1, livro2, livro3]);
    });

    test('Adicionar Membros na Biblioteca', () => {
        const membro3 = {id: 3, nome: 'Capivara'};
        biblioteca.adicionarMembro(membro3);
        expect(biblioteca.listarMembros()).toContain(membro3)
    })

    test('Remover Membro do sistema de bilioteca', () => {
        biblioteca.removerMembro(membro1.id);
        expect(biblioteca.listarMembros()).not.toContain(membro1)
    })

    test('Deve retornar um membro que seja buscado por ID', () => {
        const membro = biblioteca.buscarMembroPorId(membro1.id);
        expect(membro).toBe(membro1);
    })

    test('Deve listar todos os mmebros da biblioteca', () => {
        const listamembros = biblioteca.listarMembros();
        expect(listamembros).toEqual([membro1, membro2]);
    });

    test('Deve emprestar um livro a um membro', () => {
        const statusemprestimo = biblioteca.emprestarLivro(livro1.id, membro1.id);
        expect(statusemprestimo).toBe(true);
        expect(livro1.emprestado).toBe(true);
        expect(livro1.idMembro).toBe(membro1.id);
    });

    

    test('Não deve permitir empréstimo de um livro já emprestado', () => {
        biblioteca.emprestarLivro(livro1.id, membro1.id);
        const statusemprestimo = biblioteca.emprestarLivro(livro1.id, membro2.id);
        expect(statusemprestimo).toBe(false);
    });

    test('Deve permitir a devolução de um livro', () => {
        biblioteca.emprestarLivro(livro1.id, membro1.id);
        const sucessoDevolucao = biblioteca.devolverLivro(livro1.id);
        expect(sucessoDevolucao).toBe(true);
        expect(livro1.emprestado).toBe(false);
        expect(livro1.idMembro).toBeUndefined();
    });

    test('Não deve permitir devolução de um livro inexistente', () => {
        const sucessoDevolucao = biblioteca.devolverLivro(999); 
        expect(sucessoDevolucao).toBe(false); 
    });


    test('Deve listar todos os livros disponíveis', () => {
        biblioteca.emprestarLivro(livro1.id, membro1.id);
        const livrosdisponiveis = biblioteca.listarLivrosDisponiveis();
        expect(livrosdisponiveis).toContain(livro2);
        expect(livrosdisponiveis).not.toContain(livro1);
    });

    test('Deve listar todos os livros emprestados', () => {
        biblioteca.emprestarLivro(livro1.id, membro1.id);
        const livrosemprestados = biblioteca.listarLivrosEmprestados();
        expect(livrosemprestados).toContain(livro1);
        expect(livrosemprestados).not.toContain(livro2);
    });

    test('Deve retornar o número correto de livros na biblioteca', () => {
        expect(biblioteca.contarLivros()).toBe(3); 
    });

    test('Deve retornar o número correto de membros na biblioteca', () => {
        expect(biblioteca.contarMembros()).toBe(2); 
    });

    test('Deve listar todos os livros por um autor específico', () => {
        const livrosAutor = biblioteca.listarLivrosPorAutor('Autor Z');
        expect(livrosAutor).toContain(livro3);
        expect(livrosAutor).not.toContain(livro2);
    });

    test('Deve listar todos os livros de um gênero específico', () => {
        const livrosGenero = biblioteca.listarLivrosPorGenero('Hábitos');
        expect(livrosGenero).toContain(livro1, livro3);
        expect(livrosGenero).not.toContain(livro2);
    });

    test('Deve listar todos os livros de um ano específico', () => {
        const livrosAno = biblioteca.listarLivrosPorAno(2020);
        expect(livrosAno).toContain(livro1);
        expect(livrosAno).not.toContain(livro2);
    });


    test('Deve atualizar as informações de um livro', () => {
        const novosDados = { titulo: 'Rápido e Devagar - Edição Revisada', ano: 2021 };
        biblioteca.atualizarInformacaoLivro(livro1.id, novosDados);
        const livroAtualizado = biblioteca.buscarLivroPorId(livro1.id);
        expect(livroAtualizado.titulo).toBe('Rápido e Devagar - Edição Revisada');
        expect(livroAtualizado.ano).toBe(2021);
    });

});