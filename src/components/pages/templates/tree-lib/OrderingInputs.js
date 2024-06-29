import {FormControl, FormLabel} from "@mui/joy";
import React, {useState} from "react";
import {CheckCircle, Visibility} from "@mui/icons-material";
import OrderingInput from "./OrderingInput";

export default function OrderingInputs(data) {
    const [inputData, setInputData] = useState()
    console.log(data.dfs)

    function handleIconChange() {
        setInputData(data.data.levelOrder)
        setColor("success")
        setIcon(<CheckCircle style={{color: 'green'}}/>)
    }


    const [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined"/>)
    const [color, setColor] = useState("primary")


    const handleOnChange = event => {
        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join(''))


        let str = `${data.data.levelOrder}`;
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

    if (data.dfs) {
        return (
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>PreOrder:</FormLabel>
                <OrderingInput data={data.data.preOrder} />
                <FormLabel>InOrder:</FormLabel>
                    <OrderingInput data={data.data.inOrder} />
                <FormLabel>PostOrder:</FormLabel>
                        <OrderingInput data={data.data.postOrder} />
            </FormControl>
        )
    } else {
        return (
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>LevelOrder:</FormLabel>
                <OrderingInput data={data.data.levelOrder} />
            </FormControl>
        )
    }

}
