import React from "react";
import ItemPedido from './ItemPedido'
import estilo from "./pedido-estilo.module.css";


const CategoriaPedido = (props) => {
  

let precosArr = []
  {props.precos.map((preco, i) => precosArr.push(preco))}

  return (
        
    <div className={estilo.categoria_comida_pedido}>
      <div   className={estilo.titulo_categoria_pedido} > {props.titulo}</div>
      {props.comidas.map((comida, i) => <ItemPedido texto={comida} preco={precosArr[i]} key={i} />)}
      
    </div>

  );

}

export default CategoriaPedido;
