import React from 'react'
import style from './Dropdowun.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdowun = (props) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{props.Heading}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={props.value}
                label={props.label}
                onChange={props.onChange}
                onClick={props.onClick}
            >
                <MenuItem value={props.header}>{props.header}</MenuItem>
                {props.menuList && props.menuList.map((e, i) => (
                    <MenuItem key={i} value={e}>{e}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Dropdowun