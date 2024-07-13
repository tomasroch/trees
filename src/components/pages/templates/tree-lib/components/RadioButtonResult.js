import {ListItemDecorator, Radio} from "@mui/joy";
import React, {useState} from "react";
import {Cancel, CheckCircle, Visibility} from "@mui/icons-material";

export default function RadioButtonResult(data) {
    const [icon, setIcon] = useState()
    const [color, setColor] = useState("primary")

    const handleOnChange = event => {
        if (event.target.checked && data.data.result) {
            setColor("success")
            setIcon(<CheckCircle style={{color: 'green'}}/>)
        } else if (event.target.checked && !data.data.result) {
            setColor("danger")
            setIcon(<Cancel color="danger"/>)
        } else {
            setColor("primary")
            setIcon(<Visibility color="outlined"/>)
        }

    }
    return (
        <>
        <Radio onChange={handleOnChange} color={color} id={data.data.value} value={data.data.value} label={data.data.value} />
            <ListItemDecorator>
                {icon}
            </ListItemDecorator>
        </>
    )

}
