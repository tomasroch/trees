import {FormControl, FormLabel, Input} from "@mui/joy";
import React, {useState} from "react";
import {CheckCircle, Visibility} from "@mui/icons-material";

export default function OrderingInput(data) {
    const [inputData, setInputData] = useState()

    function handleIconChange() {
        setInputData(data.data)
        setColor("success")
        setIcon(<CheckCircle style={{color: 'green'}}/>)
    }


    const [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined"/>)
    const [color, setColor] = useState("primary")


    const handleOnChange = event => {
        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join(''))


        let str = `${data.data}`;
        if (str === inputData) {
            setColor("success")
            setIcon(<CheckCircle style={{color: 'green'}}/>)
        } else if (inputData === "") {
            setColor("primary")
            setIcon(<Visibility onClick={handleIconChange} color="outlined"/>)
        } else {
            setColor("danger")
            setIcon(<Visibility onClick={handleIconChange} color="outlined"/>)
        }

    }
        return (

                <Input //sx={{width: data.width}}
                    size="sm" placeholder={"1, 2, 3, 4...."} color={color} onChange={handleOnChange} value={inputData}
                    endDecorator={icon}
                />
        )

}
