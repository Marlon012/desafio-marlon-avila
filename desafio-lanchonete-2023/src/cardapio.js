export default class Cardapio {

    cardapio = [
        ['cafe', 'Café', '3,00'],
        ['chantily', 'Chantily (extra do Café)', '1,50'],
        ['suco', 'Suco Natural', '6,20'],
        ['sanduiche', 'Sanduíche', '6,50'],
        ['queijo', 'Queijo (extra do Sanduíche)', '2,00'],
        ['salgado', 'Salgado', '7,25'],
        ['combo1', '1 Suco e 1 Sanduíche', '9,50'],
        ['combo2', '1 Café e 1 Sanduíche', '7,50']
    ];

    atualizarInformacaoDoItem(item){
        cardapio.forEach(function(){
            if (this[0]==item.codigo) {
                item.descricao=this[1]
                item.valor=this[2]
                console.log(item);
            }
            
        });
        
    } 
        
    
}
