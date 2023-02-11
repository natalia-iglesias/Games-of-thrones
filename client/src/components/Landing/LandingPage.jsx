import React from 'react';
import {Link} from 'react-router-dom';
import s from '../Landing/Landing.module.css'

export default function LandingPage() {
  return (
    <div className={s.bkg}>
        
        <Link to = '/home'>
            <button className={s.btn}>Ingresar</button>
        </Link>
    </div>
  )
}
