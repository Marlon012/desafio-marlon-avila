// A classe foi criada para conter apenas os serviços para a classe (Item). 

export default class ItemService {

    validarItem(item) {

        let mensagem = '';

        if (!item.length) {      //(!)tem o significado de negação.

            mensagem = 'Não há itens no carrinho de compra!';
        }
        item.forEach(function (item) {
            let vetorItem = item.split(',');    // split transforma o texto em vetor,separando com a vírgula que vem no texto. 

            //valida se existe a segunda posição do vetor.

            if (!vetorItem[1]) {
                mensagem = 'Item inválido!';
            }

            //valida se a quantidade for zero.

            if (vetorItem[1] === '0') {
                mensagem = 'Quantidade inválida!';
            }
        });
        return mensagem;
    }
}