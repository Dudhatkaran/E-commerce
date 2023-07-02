import React from 'react'
import style from './button.module.css'

const Button = (props) => {
    return (
        <div>
            <button type='button' className={`${style.btn} ${props.className}`} onClick={props.onClick} onChange={props.onChange}>{props.Name}</button>
        </div>
    )
}

export default Button