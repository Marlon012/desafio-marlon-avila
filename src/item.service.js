// A classe foi criada para conter apenas os servicços para a classe (Item). 

export default class ItemService{  

    validarItem(item){
        
        if(!item.length){      //(!)tem o significado de negação.

            return 'Não há itens no carrinho de compra!';
        }
    }
}