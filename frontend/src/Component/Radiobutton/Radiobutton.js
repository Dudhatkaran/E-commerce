import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Radiobutton = (props) => {
    return (
        // <FormControl>
        //     <FormLabel id="demo-radio-buttons-group-label">{props.heading}</FormLabel>
        //     <RadioGroup
        //         aria-labelledby="demo-radio-buttons-group-label"
        //         name="radio-buttons-group"
        //     >
                <FormControlLabel
                    control={<Radio />}
                    label={props.label}
                    value={props.value}
                    onChange={props.onChange}
                    onClick={props.onClick}
                />
        //     </RadioGroup>
        // </FormControl>
    )
}

export default Radiobutton