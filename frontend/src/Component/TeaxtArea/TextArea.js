import { TextareaAutosize } from '@mui/material'
import React from 'react'
import './Textarea.css'

const TextArea = (props) => {
    return (
        <div className='mainTextarea'>
            <TextareaAutosize placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default TextArea
