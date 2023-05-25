import React from 'react'
import { Box, TextField } from '@mui/material'
import './input.css'

const Input = (props) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic"
                label={props.label}
                variant="outlined"
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
            />
        </Box>
    )
}

export default Input