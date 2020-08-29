import React from "react";
import estilo from "./pedido-estilo.module.css";



/* entradas: 

de CategoriaPedido:
texto={comida}
preço=preçosArr =map dos preço no Obj cardapio
key= iteração do map dos nomes das comidas

*/
const ItemPedido = (props) => {



  return (

     
     
      <div className={estilo.comida_pedido} key="props">
            <span className={estilo.titulo_comida_pedido}>  {props.texto}  </span>
            <span className={estilo.preco_comida_pedido}>  {props.preço} </span>
            <span className={estilo.mais_comida_pedido}>  +  </span>
            
      </div>
      
    
          
  );
};

export default ItemPedido;
