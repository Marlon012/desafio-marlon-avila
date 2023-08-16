import ItemService from "./item.service";
import FormaPagamentoService from "./forma-pagamento-service";
import FormaDePagamento from "./forma-de-pagamento";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let itemService = new ItemService();
        let resultado = itemService.validarItem(itens);
        let formaPagamentoService = new FormaPagamentoService();
        if (!resultado) {
            resultado = formaPagamentoService.validarFormaPagamento(metodoDePagamento);
        }
        return resultado;
    }

}
export { CaixaDaLanchonete };