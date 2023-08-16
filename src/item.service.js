// A classe foi criada para conter apenas os serviços para a classe (Item).
import Item from "./item.js";
import Cardapio from "./cardapio.js";
export default class ItemService {
    validarItem(item) {
        let mensagem = "";

        if (!item.length) {  //(!)tem o significado de negação.

            mensagem = 'Não há itens no carrinho de compra!';
        }
        item.forEach(function (item) {
            let vetorItem = item.split(','); // split transforma o texto em vetor,separando com a vírgula que vem no texto.

            //valida se existe a segunda posição do vetor.

            if (!vetorItem[1]) {
                mensagem = "Item inválido!";
            }

            //valida se a quantidade for zero.

            if (vetorItem[1] === "0") {
                mensagem = "Quantidade inválida!";
            }
        });

        if (!mensagem.length) {
            item.forEach(function (itemAtual) {
                let vetorItem = itemAtual.split(',');
                let cardapio = new Cardapio();
                cardapio.lista.forEach(function (cardapioItemAtual) {
                    if (vetorItem[0] === cardapioItemAtual.codigo && cardapioItemAtual.extra) { 
                       let itemExtra = item.filter(i=>i.includes(cardapioItemAtual.extra));
                       if(!itemExtra.lemgth){
                        mensagem = 'Item extra não pode ser pedido sem o principal';
                       }
                    }
                });
            });
        }


        return mensagem;
    }

    buscarItemDoCardapio(codigoDoItem) {
        let cardapio = new Cardapio();
        cardapio.lista.forEach(function (itemAtual) {
            if (itemAtual.codigo == codigoDoItem) {
                let item = new Item(
                    itemAtual.codigo,
                    null,
                    itemAtual.descricao,
                    itemAtual.valor,
                    itemAtual.extra
                );
                return item;
            }
        });
    }
}
