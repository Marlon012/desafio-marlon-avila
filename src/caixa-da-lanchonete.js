import ItemService from "./item.service";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let itemService = new ItemService();
        let resultado = itemService.validarItem(itens);

        return resultado;
      
    }

}
export { CaixaDaLanchonete };