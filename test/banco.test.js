<<<<<<< HEAD
const Banco1 = require("../src/banco");

describe('Banco', () => {
    test('Teste de Deposito no Banco', () => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.depositar(500);
        expect(conta.obterSaldo()).toBe(1500);
    });

    test('Teste de saque de dinehiro', () => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.sacar(100);
        expect(conta.obterSaldo()).toBe(900);
    })

    test('Teste de Dinheiro Insuficiente no Saque', () => {
        const conta = new Banco1("Conta teste", 100);
        expect(() => conta.sacar(200)).toThrow('Saldo insuficiente');
    })


    test('Teste de trasferência entre contas', () => {
        const contajoao = new Banco1('Conta do Joao', 5000)
        const contalucas = new Banco1('Conta do Lucas', 1000)
        contajoao.transferir(3000, contalucas)
        expect(contalucas.obterSaldo()).toBe(4000)
        expect(contajoao.obterSaldo()).toBe(2000)
    })

    test('Teste de Limite para trasferencia de contas', () => {
        const contajoao = new Banco1('Conta do Joao', 5000)
        const contalucas = new Banco1('Conta do Lucas', 1000)
        expect(() => contajoao.transferir(6000, contalucas)).toThrow('Saldo insuficiente');
        expect(contalucas.obterSaldo()).toBe(1000)
        expect(contajoao.obterSaldo()).toBe(5000)
    })

    test('Limite de Saque', () => {
        const conta = new Banco1('Conta Teste', 5000)
        conta.definirLimiteDeSaque(1000)
        expect(() => conta.verificarLimiteDeSaque(1500)).toThrow('Saque acima do limite permitido')
    })

    test('Juros do Banco', () => {
        const conta = new Banco1('Conta teste', 10000)
        conta.aplicarJuros(1)
        expect(conta.obterSaldo()).toBe(10100) // 1% de 10000 = 100 -> Logo o valor final será de 10100
    })

    test('Pagando uma Conta', () => {
        const contalucas2 = new Banco1( 'Conta Teste', 500)
        contalucas2.pagarConta(450, 'Mensalidade do Cartão')
        expect(contalucas2.obterSaldo()).toBe(50)
    })

=======
const Banco = require("../src/banco");

describe('Testes da classe Banco', () => {
    let conta;

    beforeEach(() => {
        conta = new Banco('Conta Ugioni', 2);
    });

    test('Deve depositar dinheiro corretamente', () => {
        conta.depositar(7.7);
        expect(conta.obterSaldo()).toBe(9.7);
    });
>>>>>>> c90474987ef7712e385be6ae7ebc5eb79b876d8b
});