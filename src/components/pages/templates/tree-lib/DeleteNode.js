import React, {memo, useState} from 'react';
import {Handle, Position, useReactFlow, useStore} from 'reactflow';
import {Input} from "@mui/joy";
import {CheckCircle, Visibility} from "@mui/icons-material";

//TODO odmazat console.log ale všude !
//TODO odmazat unused importy ale taky všude!
// TODO tady to chce brutální refaktor ještě
export default memo(({data, id}) => {
    const {setNodes} = useReactFlow();

    const [inputData, setInputData] = useState(data.result)

    const result = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return node.data.result
    });
    const test = useStore((s) => { // aby se celé memo zavolalo znovu, tak musí být uvnitř těla definován
        const node = s.nodeInternals.get(id);       // každý atribut co se bude měnit a má vyvolat re-rendering (nemusí se používat)
        return node.data.newResult
    });


    const handleIconChange = event => {
        setNodes((nds) =>
            nds.map((node) => {
                if (id === '1' && node.id === '1') { // pokud klikneme na nápovědu u kořene zobrazíme první variantu
                    node.data.result = node.data.newResult[0].value
                    node.data.newResult[0].nodesNewResult.map(newResult => {
                        setNodes((nds) =>
                            nds.map((node) => {
                                if (node.id === newResult.id) {
                                    node.data.newResult = [{value: newResult.result, nodesNewResult: []}]
                                }
                                return node;
                            })
                        );
                    })
                }
                if (node.id === '1') {
                    node.data.newResult.map(newResult => {
                        newResult.nodesNewResult.map(result => {
                            if (result.id === id) {
                                // z nodu 1 kde jsou výsledky vidím, že je změna pro můj node, tak ho jdu najít a nasetit nový result
                                setNodes((nds) =>
                                    nds.map((nod) => {
                                        if (nod.id === id) {
                                            nod.data.result = result.result
                                        }
                                        return nod;
                                    })
                                );
                            }
                        })
                    })
                }
                return node;
            })
        );

        setColor("success")
        setIcon(<CheckCircle style={{color: 'green'}}/>)
    }


    let [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined"/>)
    let [color, setColor] = useState("primary")


    if (data.newResult !== undefined && data.newResult.find(result => result.value === data.result) === undefined){
        color = "danger"
        icon = <Visibility onClick={handleIconChange} color="outlined"/>
    } else {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    node.data.newResult.map(newResult => {
                        newResult.nodesNewResult.map(result => {
                            if (result.id === id) {
                                // z nodu 1 kde jsou výsledky vidím, že je změna pro můj node, tak ho jdu najít a nasetit nový result
                                setNodes((nds) =>
                                    nds.map((nod) => {
                                        if (nod.id === id && result.result === data.result) {
                                            color = "success"
                                            icon = <CheckCircle style={{ color: 'green' }} />
                                        }
                                        return nod;
                                    })
                                );
                            }
                        })
                    })
                }
                return node;
            })
        );
    }


    const handleOnChange = event => {
        if (id === '1' && data.newResult[1] === undefined){ // if newResult[1] undefined its halda example
            setNodes((nds) =>
                nds.map((node) => {
                    if (id === '1' && node.id === '1') { // pokud klikneme na nápovědu u kořene zobrazíme první variantu
                        if (!(id === '1' || node.id === '1')){
                            node.data.result = node.data.newResult[0].value
                        } else {
                            setColor("success")
                            setIcon(<CheckCircle style={{color: 'green'}}/>)
                        }

                        node.data.newResult[0].nodesNewResult.map(newResult => {
                            setNodes((nds) =>
                                nds.map((node) => {
                                    if (node.id === newResult.id) {
                                        node.data.newResult = [{value: newResult.result, nodesNewResult: []}]
                                    }
                                    return node;
                                })
                            );
                        })
                    }
                    return node;
                })
            );
        }

        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join(''))

        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === id)
                    node.data.result = inputData

                return node;
            })
        );


        if (data.newResult !== undefined && data.newResult.value !== undefined && data.newResult.value === inputData) {
            setColor("success")
            setIcon(<CheckCircle style={{color: 'green'}}/>)
        }
        if (data.newResult !== undefined && data.newResult.find(result => result.value === inputData) !== undefined) {
            setColor("success")
            setIcon(<CheckCircle style={{color: 'green'}}/>)

            const newResult = data.newResult.find(result => result.value === inputData)
            newResult.nodesNewResult.map(newResult => {
                setNodes((nds) =>
                    nds.map((node) => {
                        if (node.id === newResult.id) {
                            node.data.newResult = [{value: newResult.result, nodesNewResult: []}]
                        }
                        return node;
                    })
                );
            })
        }
    }

    return (
        <>
            <Input sx={{width: data.width}}
                   size="sm" placeholder={data.placeHolder} color={color} onChange={handleOnChange} value={result}
                   endDecorator={icon}
            />
            <Handle type="target" position={Position.Top}/>
            <Handle type="source" position={Position.Bottom}/>

            {/*<Typography>{id}</Typography>*/}
        </>
    );
})