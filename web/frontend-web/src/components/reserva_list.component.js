import React, {useState,useEffect} from "react";

import BootstrapTable from 'react-bootstrap-table-next';

import 'bootstrap/dist/css/bootstrap.min.css';
import'react-bootstrap-table-next/dist/react-bootstrap-table2.css';


import filterFactory,{textFilter}from'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import {Link} from "react-router-dom";
import axios from "axios";

const url = "http://localhost:9090/api/";
export default function Reserva_listComponent({reservas,setReservas,restaurantes,setRestaurantes,
                                                  mesas,setMesas,clientes,setClientes}) {


    // const [restaurantes,setRestaurantes]=useState('');
    // const [mesas,setMesas]=useState('');
    // const [clientes,setClientes]=useState('');


    const columns=[
        {dataField:'id', text:'Id'},
        {dataField:'id_restaurante', text:'Restaurante', filter:textFilter() },
        {dataField:'id_mesa', text:'Mesa',sort:true},
        {dataField:'fecha', text:'Fecha',sort:true,filter:textFilter()},
        {dataField:'rango', text:'Horario' ,sort:true},
        {dataField:'id_cliente', text:'Cliente',filter:textFilter()},


    ]





    useEffect(()=>{
        setReservas(reservas)
        // loadRestaurante()
        //     .then(res=>console.log(res));
        //
        // loadMesa()
        //     .then(res=>console.log(res));
        // loadClientes()
        //     .then(res=>console.log(res));

        modReserva();
        // loadReservas()
        //     .then(res=>console.log(res));

        return()=>{
            modReserva();
        };

    },[reservas]);

    // let {id_restaurante,id_mesa,fecha,rango,id_cliente}=reservas

    const modReserva=()=>{

        console.log(reservas.length);
        console.log(restaurantes.length);
        for(let i=0;i<reservas.length;i++){
            for(let j=0;j<restaurantes.length;j++){
                if(reservas[i].id_restaurante===restaurantes[j].id){
                    console.log("dsfsfd");
                    reservas[i].id_restaurante=restaurantes[j].nombre;
                }
            }
            for(let j=0;j<mesas.length;j++){
                if(reservas[i].id_mesa===mesas[j].id){
                    reservas[i].id_mesa=mesas[j].nombre;
                }
            }
            for(let j=0;j<clientes.length;j++){
                if(reservas[i].id_cliente===clientes[j].id){
                    reservas[i].id_cliente=clientes[j].nombre;
                }
            }

        }
        setReservas(reservas);
        console.log(reservas);
    };


    const loadRestaurante =async (id) => {
        const response = await axios.get(url + 'restaurante/' +id );
        setRestaurantes(response.data);
    };
    const loadMesa = async () => {
        const response = await axios.get(url + 'mesa/');
        setMesas(response.data);
    };
    const loadClientes = async () => {
        const response = await axios.get(url + 'cliente/');
        setClientes(response.data);
    };
    return(
        <div className="">

            <div className="col-16">
                <input type="button" onClick={modReserva} value="mostrar"/>
                <BootstrapTable bootstrap4 keyField='id' columns={columns} data={reservas} filter={filterFactory()}/>

            </div>

        </div>

    );
};
