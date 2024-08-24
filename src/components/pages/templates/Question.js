import React, {useState} from 'react';
import {FormControl, FormLabel, Input} from "@mui/joy";
import {CheckCircle, Visibility} from "@mui/icons-material";

export default function Question({ label, result, placeHolder})  {
    const [inputData, setInputData] = useState()
    const handleIconChange = event => {
        setInputData(result)
        setColor("success")
        setIcon(<CheckCircle style={{ color: 'green' }} />)
    }
    const handleOnChange = event => {
        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join('')).toUpperCase()
        result = result.toUpperCase()

        if (result === inputData){
            setColor("success")
            setIcon(<CheckCircle style={{ color: 'green' }} />)
        }
        else if (inputData === ""){
            setColor("primary")
            setIcon(<Visibility onClick={handleIconChange} color="outlined" />)
        }
        else{
            setColor("danger")
            setIcon(<Visibility onClick={handleIconChange} color="outlined" />)
        }

    }

    const [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined" />)
    const [color, setColor] = useState("primary")

    return (
        <>
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>{label}</FormLabel>
                <Input
                       size="sm" placeholder={placeHolder} color={color} onChange={handleOnChange} value={inputData} endDecorator={icon}
                />
            </FormControl>
        </>
    );
}