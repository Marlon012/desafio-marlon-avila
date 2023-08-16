import FormaDePagamento from "./forma-de-pagamento";
export default class FormaPagamentoService {

    validarFormaPagamento(formaPagamento) {

        // o correto seria colocar a lista em um banco de dados.
        let formasAceitas = ['dinheiro', 'debito', 'credito'];

        if(!formasAceitas.includes(formaPagamento)){
            return 'Forma de pagamento inválida!';
        }
        return;

    }

}