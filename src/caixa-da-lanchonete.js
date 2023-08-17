import ItemService from "./item.service";
import FormaPagamentoService from "./forma-pagamento-service";
import FormaDePagamento from "./forma-de-pagamento";
import PagamentoService from "./pagamento-service";

class CaixaDaLanchonete {

    //validando os itens e a forma de pagamento.
    calcularValorDaCompra(metodoDePagamento, itens) {

        let itemService = new ItemService();
        let resultado = itemService.validarItem(itens);
    
        if (!resultado) {
            let formaPagamentoService = new FormaPagamentoService();
            resultado = formaPagamentoService.validarFormaPagamento(metodoDePagamento);
        }
        if(!resultado){
            let pagamentoService = new PagamentoService();
            resultado = pagamentoService.calcular(metodoDePagamento, itens);
        }
        return resultado;
    }

}
export { CaixaDaLanchonete };