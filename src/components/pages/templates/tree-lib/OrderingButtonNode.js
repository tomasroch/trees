import React, {memo, useState} from 'react';
import {useReactFlow} from 'reactflow';
import {Box, Button, Option, Select, selectClasses} from "@mui/joy";
import {ArrowBackIos, ArrowForwardIos, KeyboardArrowDown} from "@mui/icons-material";
import Stack from "@mui/joy/Stack";

//TODO odmazat console.log ale všude !
//TODO odmazat unused importy ale taky všude!

export default memo(({data, id}) => {
    const {setNodes} = useReactFlow();

    const [selectValue, setSelectValue] = useState("PreOrder")

    const handleSelectChange = event => {
        setSelectValue(event.target.textContent)
        setNodes((nds) =>
            nds.map((node) => {
                node.data.processing = false
                node.data.processed = false
                return node;
            }));
    }

    function getOrderArray(){
        let array;
        if (selectValue === "PreOrder")
            array = data.preOrder;
        else if (selectValue === "InOrder")
            array = data.inOrder
        else if (selectValue === "PostOrder")
            array = data.postOrder
        return array;
    }

    const handleClickForward = event => {
        let array = getOrderArray()
        let foundProcessing = false
        let foundProcessed = false

        array.map((orderItem) => {
            setNodes((nds) =>
                nds.map((node) => {
                    if (node.data.result === orderItem) {
                        if (!node.data.processing && !foundProcessing){
                            node.data.processing = true
                            foundProcessing = true
                        }
                        if (!foundProcessing && node.data.processing && !node.data.processed && !foundProcessed){
                            node.data.processed = true
                            foundProcessed = true
                        }
                    }
                    return node;
                })
            );
            return orderItem;
        })
    }

    const handleClickBack = event => {
        let array = getOrderArray()
        let foundProcessed = false

        for(let i = array.length-1; i > -2; i--){
            console.log(array[i])
            setNodes((nds) =>
                nds.map((node) => {
                    if (node.data.result === array[i]) {
                        if (node.data.processed && node.data.processing && !foundProcessed){
                            node.data.processed = false;
                            foundProcessed = true;
                            return;
                        }
                        if (!node.data.processed && node.data.processing && !foundProcessed){
                            node.data.processing = false
                        };
                    }
                    return node;
                })
            );
        }
    }

    return (
        <>
            <Stack spacing={1} alignItems="flex-start"   alignItems="center" justifyContent="center" >
                <Select
                    onChange={handleSelectChange}
                    value={selectValue}
                    indicator={<KeyboardArrowDown/>}
                    sx={{
                        width: 200,
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                    <Option value="PreOrder">PreOrder</Option>
                    <Option value="InOrder">InOrder</Option>
                    <Option value="PostOrder">PostOrder</Option>
                </Select>
                <Box direction="row">
                    <Button onClick={() =>handleClickBack()} startDecorator={<ArrowBackIos />} type="submit"></Button>
                    <Button onClick={() =>handleClickForward()} endDecorator={<ArrowForwardIos />} type="submit"></Button>
                </Box>
            </Stack>
        </>
    );
})