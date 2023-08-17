import FormaDePagamento from "./forma-de-pagamento";
import ItemService from "./item.service";

export default class PagamentoService {

    calcular(formaPagamento, itens) {

        let itemService = new ItemService();
        let total = 0.0;

        itens.forEach(function (itemAtual) {
            let item = itemService.buscarItemDoCardapio(itemAtual);
            total = total + (item.valor * item.quantidade);
        });
        let formasPagamento = [
            new FormaDePagamento('dinheiro',0.05,0),
            new FormaDePagamento('debito', 0, 0),
            new FormaDePagamento('credito', 0, 0.03)
        ];
        let formaEscolhida = formasPagamento.find(th=>th.nome === formaPagamento);

        total = total * (1-formaEscolhida.desconto + formaEscolhida.acrescimo);
        
        let mensagen = 'R$ ' + total.toFixed(2);
        return mensagen.replace('.' , ',');
    }
}