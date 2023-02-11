import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Card/Card.module.css'



export default function Card({ fullname,title, id,imageUrl}) {
  return (
    <div className={style.card}>
      <Link to = {'/details/'+ id}>
        <h3 className={style.h}>{fullname}</h3>
        <h5 className={style.h}>{title}</h5>
       <img className={style.img} src= {imageUrl}  alt="img not found"/>
       </Link> 
    </div>
  );
}
