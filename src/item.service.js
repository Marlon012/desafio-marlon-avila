// A classe foi criada para conter apenas os serviços para a classe (Item).

import Item from "./item.js";
import Cardapio from "./cardapio.js";

export default class ItemService {
    
    // se ouvesse mais tempo eu poderia refatorar as validações para funções separadas. 
    validarItem(item) {
        let mensagem = "";

        if (!item.length) {  //(!)tem o significado de negação.

            mensagem = 'Não há itens no carrinho de compra!';
        }
        if (!mensagem.length) {
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
        }
        if (!mensagem.length) {
            item.forEach(function (itemAtual) {
                let vetorItem = itemAtual.split(',');
                let cardapio = new Cardapio();
                cardapio.lista.forEach(function (cardapioItemAtual) {
                    if (vetorItem[0] === cardapioItemAtual.codigo && cardapioItemAtual.extra) {
                        let itemExtra = item.filter(i => i.includes(cardapioItemAtual.extra));
                        if (!itemExtra.length) {
                            mensagem = 'Item extra não pode ser pedido sem o principal';
                        }
                    }
                });
            });
        }
        if (!mensagem.length) {
            item.forEach(function (itemAtual) {
                let vetorItem = itemAtual.split(',');
                let cardapio = new Cardapio();
                let itemEncontrado = false;
                cardapio.lista.forEach(function (cardapioItemAtual, index) {
                    if (vetorItem[0] === cardapioItemAtual.codigo) {
                        itemEncontrado = true;
                    }
                    if (index === cardapio.lista.length - 1 && !itemEncontrado) {
                        mensagem = 'Item inválido!';
                    }
                });
            });
        }


        return mensagem;
    }

    buscarItemDoCardapio(itemQuantidade) {
        let vetorItem = itemQuantidade.split(',');
        let cardapio = new Cardapio();
        let itemAtual = cardapio.lista.find(i => i.codigo === vetorItem[0]);
        let item = new Item(
            vetorItem[0],
            Number(vetorItem[1]),
            itemAtual.descricao,
            itemAtual.valor,
            itemAtual.extra
        );
        return item;
    }
}
