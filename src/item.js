// Essa classe coleta todas ás informações dos itens.

export default class Item {

    codigo;
    descricao;
    valor;
    quantidade;
    extra;

    constructor(codigo, quantidade, descricao, valor, extra) {
        this.codigo = codigo;
        this.quantidade = quantidade;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.extra = extra;
    }
}