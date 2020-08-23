import React from "react";
import Cabecalho from "../Cabecalho";
import Navegacao from "../Navegacao";
import estilo from "./pedido-estilo.module.css";
import Footer from "../Footer";
import CategoriaPedido from './CategoriaPedido'
import Comidas from '../Comidas'

const Pedido = (props) => {
  return (

  
    <div className={estilo.div_Inicio}>
      <div className={estilo.div_topo}>
        <Cabecalho />
        <Navegacao />
      </div>


      <div className={estilo.main_div_pedido}>


      <CategoriaPedido titulo="Mais Pedidos" numero_ped="5" comidas={["galeto", "espetinho vegetariano","churrasqueto","salada","farofa de ovos"]}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Carnes" numero_ped="4" comidas={["galeto", "espetinho vegetariano","churrasqueto"]}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Vegetariano" numero_ped="3" comidas={["galeto", "espetinho vegetariano","salada","farofa de ovos"]}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Guarnições" numero_ped="8" comidas={[<Comidas></Comidas>,"galeto", "espetinho vegetariano","churrasqueto","salada","farofa de ovos"]}>
      </CategoriaPedido>


    </div>

      <div className={estilo.div_footer}>
        <Footer />
      </div>

    </div>
  );
};

export default Pedido;