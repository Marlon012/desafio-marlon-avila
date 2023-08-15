// Essa classe coleta todas ás informações dos itens.

export default class Item{ 

    codigo;
    descricao;
    valor;
    quantidade;

    constructor(codigo, quantidade) {
        this.codigo=codigo;
        this.quantidade=quantidade;
    }
    constructor(codigo, descricao, valor, quantidade) {
        this.codigo=codigo;
        this.quantidade=quantidade;
        this.descricao=descricao;
        this.valor=valor;
    }

}