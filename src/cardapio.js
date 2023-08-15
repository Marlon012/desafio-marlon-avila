export default class Cardapio {

    cardapio = [
        { codigo: 'cafe', descricao: 'Café', valor: '3,00' },
        { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: '1,50' },
        { codigo: 'suco', descricao: 'Suco Natural', valor: '6,20' },
        { codigo: 'sanduiche', descricao: 'Sanduíche', valor: '6,50' },
        { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: '2,00' },
        { codigo: 'salgado', descricao: 'Salgado', valor: '7,25' },
        { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: '9,50' },
        { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: '7,50' }
    ];

    atualizarInformacaoDoItem(item) {
        cardapio.forEach(function () {
            if (this[0] == item.codigo) {
                item.descricao = this[1]
                item.valor = this[2]
                console.log(item);
            }

        });

    }
}
