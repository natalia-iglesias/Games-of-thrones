import React from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { orderName, filterFamily } from "../../action";
import style from '../Filtered/Filtros.module.css';


export default function Filtred() {
const dispatch = useDispatch()
const [orden, setOrden] = useState('')
const [currentPage, setCurrentPage] = useState(1)   
  
       function handleName(e){
         e.preventDefault()
         dispatch(orderName(e.target.value))
         setCurrentPage(1)
         setOrden(e.target.value)
       }
       function handleFamily(e){
         dispatch(filterFamily(e.target.value))
       }

  return (
    <div>
         <select className={style.filtros} onChange={e => handleName(e)}>
                    <option>Order abc</option>
                    <option value= 'asc'>Ascendente a-z</option>
                    <option value= 'desc'>Descendente z-a</option>
                </select>
                 <select className={style.filtros}>
                    <option value = 'All'>Todos</option>
                    <option value = 'created'>creados</option>
                    <option value = 'api'>Existente</option>
                 </select>
                 <select className={style.filtros} onChange={e => handleFamily(e)}>
                    <option value = 'All'>Family</option>
                    <option value = 'House Targaryen'>House Targaryen</option>
                    <option value = 'House Tarly'>House Tarly</option>
                    <option value = 'House Stark'>House Stark</option>
                    <option value = 'House Baratheon'>House Baratheon</option>
                    <option value = 'House Lannister'>House Lannister</option>
                    <option value = 'House Greyjoy'>House Greyjoy</option>
                    <option value = 'House Clegane'>House Clegane</option>
                    <option value = 'House Baelish'>House Baelish</option>
                    <option value = 'House Seaworth'>House Seaworth</option>
                    <option value = 'House Tyrell'>House Tyrell</option>
                    <option value = 'Free Folk'>Free Folk</option>
                    <option value = 'Tarth'>Tarth</option>
                    <option value = 'Targaryan'>Targaryan</option>
                    <option value = 'Stark'>Stark</option>
                    <option value = 'Greyjoy'>Greyjoy</option>
                    <option value = 'Baratheon'>Baratheon</option>
                    <option value = 'Naathi'>Naathi</option>
                    <option value = 'Bolton'>Bolton</option>
                    <option value = 'Naharis'>Naharis</option>
                    <option value = 'Lorathi'>Lorathi</option>
                    <option value = 'Mormont'>Mormont</option>
                    <option value = 'Sparrow'>Sparrow</option>
                    <option value = 'Viper'>Viper</option>
                    <option value = 'Lorath'>Lorath</option>
                    <option value = 'Sand'>Sand</option>
                    <option value = 'Worm'>Worm</option>
                    <option value = 'Qyburn'>Qyburn</option>
                    <option value = 'Bronn'>Bronn</option>
                    <option value = 'Tyrell'>Tyrell</option>
                    <option value = 'Unkown'>Unkown</option>
                    <option value = 'None'>None</option>
                   
                 </select>
     </div>
  )
}
