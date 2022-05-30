import React, {useState,useEffect} from "react";

import BootstrapTable from 'react-bootstrap-table-next';

import 'bootstrap/dist/css/bootstrap.min.css';
import'react-bootstrap-table-next/dist/react-bootstrap-table2.css';


import filterFactory,{textFilter}from'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import {Link} from "react-router-dom";
import axios from "axios";
import Reserva_listComponent from "./reserva_list.component";

const url = "http://localhost:9090/api/";
export default function ReservaComponent() {
    const [reservas,setReservas]=useState([]);
    const [restaurantes,setRestaurantes]=useState([]);
    const [mesas,setMesas]=useState([]);
    const [clientes,setClientes]=useState([]);




    const columns=[
        {dataField:'id', text:'Id'},
        {dataField:'id_restaurante', text:'Restaurante', filter:textFilter() },
        {dataField:'id_mesa', text:'Mesa',sort:true},
        {dataField:'fecha', text:'Fecha',sort:true,filter:textFilter()},
        {dataField:'rango', text:'Horario' ,sort:true},
        {dataField:'id_cliente', text:'Cliente',filter:textFilter()},


    ]

    const loadReservas= async () => {
        // fetch(url + 'reserva/')
        //     .then(response=>response.json())
        //     .then(result =>setReservas(result));
        const response = await axios.get(url + 'reserva/');

        // console.log("sdf", response.data);
        //
        setReservas(response.data);
        console.log(reservas);


    };

    const loadRestaurantes= async () => {
        // fetch(url + 'reserva/')
        //     .then(response=>response.json())
        //     .then(result =>setReservas(result));
        const response = await axios.get(url + 'restaurante/');

        // console.log("sdf", response.data);
        //
        setRestaurantes(response.data);
    };
    const loadMesas= async () => {
        // fetch(url + 'reserva/')
        //     .then(response=>response.json())
        //     .then(result =>setReservas(result));
        const response = await axios.get(url + 'mesa/');

        // console.log("sdf", response.data);
        //
        setMesas(response.data);
    };
    const loadClientes= async () => {
        // fetch(url + 'reserva/')
        //     .then(response=>response.json())
        //     .then(result =>setReservas(result));
        const response = await axios.get(url + 'cliente/');

        // console.log("sdf", response.data);
        //
        setClientes(response.data);
    };




    useEffect(()=>{

        // loadRestaurante()

        loadMesas()
            .then(res=>console.log(res));
        loadClientes()
            .then(res=>console.log(res));

        loadRestaurantes()
            .then(res=>console.log(res));
        loadReservas()
            .then(res=>console.log(res));

    },[]);


    return(
        <div className="">
            <div className="col-md-16">
                <Link
                    to={"/reserva/add"}
                    className="m-1 btn btn-info"
                >
                    Agregar Reserva
                </Link>
            </div>
            <div className="col-16">
                <h4>Lista de Reservas</h4>
                {/*<BootstrapTable bootstrap4 keyField='id' columns={columns} data={reserva} filter={filterFactory()}/>*/}
               <Reserva_listComponent reservas={reservas} setReservas={setReservas}
                                      restaurantes={restaurantes} setRestaurantes={setRestaurantes}
                                      mesas={mesas} setMesas={setMesas}
                                        clientes={clientes} setClientes={setClientes}/>
            </div>

        </div>

    );
};
