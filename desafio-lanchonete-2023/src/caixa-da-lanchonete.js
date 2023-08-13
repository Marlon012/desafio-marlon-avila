class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        //console.log(metodoDePagamento)
        //console.log(itens[0].split(","))

        let Cardapio = new Cardapio();


        const informacaoDoItem = itens[0].split(",");
        let item = new item(informacaoDoItem[0], informaçaoDoItem[1]);
        cardapio.atualizarInformacaoDoItem(item);
        cardapio.forEach(item => {
            if (item[0] === codigo[0]) {
                //console.log(item);
            }
        });
        return "";
    }

}
export { CaixaDaLanchonete };
