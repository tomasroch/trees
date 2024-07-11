import {FormControl, FormLabel} from "@mui/joy";
import React, {useState} from "react";
import {CheckCircle, Visibility} from "@mui/icons-material";
import OrderingInput from "./OrderingInput";

export default function OrderingInputs(data) {
    const [inputData, setInputData] = useState()

    const [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined"/>)
    const [color, setColor] = useState("primary")

    function handleIconChange() {
        setInputData(data.data.levelOrder)
        setColor("success")
        setIcon(<CheckCircle style={{color: 'green'}}/>)
    }

    const placeHolder = "1, 2, 3, 4...."

    if (data.dfs) {
        return (
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>PreOrder:</FormLabel>
                <OrderingInput data={data.data.preOrder} placeHolder={placeHolder} />
                <FormLabel>InOrder:</FormLabel>
                    <OrderingInput data={data.data.inOrder} placeHolder={placeHolder} />
                <FormLabel>PostOrder:</FormLabel>
                        <OrderingInput data={data.data.postOrder} placeHolder={placeHolder} />
            </FormControl>
        )
    } else {
        return (
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>LevelOrder:</FormLabel>
                <OrderingInput data={data.data.levelOrder} placeHolder={placeHolder} />
            </FormControl>
        )
    }

}
