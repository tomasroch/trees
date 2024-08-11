import * as React from 'react';
import Table from '@mui/joy/Table';
import {Clear} from "@mui/icons-material";
import {Box, Button, FormControl, FormLabel} from "@mui/joy";
import OrderingInput from "./tree-lib/components/OrderingInput";

// funkce která prohází hrany v poli, aby student nemohl odhadnout výsledek podle uspořádání hran
function arrayRandomizeShuffle(a) {
    let index = a.length;
    // dokud zbývají hranyk prohození
    while (index != 0) {
        // Vyber hrany
        let random = Math.floor(Math.random() * index);
        index--;
        // a prohoď ji s aktulní
        [a[index], a[random]] = [
            a[random], a[index]];
    }
}

export default function ApsAphTable(props) {
    const placeHolderNode = "a, b, c, d..."
    const placeHolderEdges = "ab, ac, bc, bd..."

    arrayRandomizeShuffle(props.edges)

    let edges = "";
    props.edges.map(edge => {
        edges = edges + edge.id + ", "
        return edge
    })
    edges = edges.substring(0, edges.length - 2);

    let title;
    let result;
    let nodes;
    let edgesIn;
    let edgesOut;
    let prefix = props.nodes[0].prefixId;

    if (props.fifo){
        title = "FIFO:";
        result = props.nodes[0].fifo;
        nodes = props.nodes[0].fifoNodes;
        edgesIn = props.nodes[0].fifoEdgesIn;
        edgesOut = props.nodes[0].fifoEdgesOut;
    } else {
        title = "LIFO:";
        result = props.nodes[0].lifo;
        nodes = props.nodes[0].lifoNodes;
        edgesIn = props.nodes[0].lifoEdgesIn;
        edgesOut = props.nodes[0].lifoEdgesOut;
    }

    function lineThroughButton(id){
        let button = document.getElementById(id)
        button.style.textDecoration = button.style.textDecoration === 'none' ? 'line-through' : 'none'
    }

    const changeStyles = (idButton1, idRow, idButton2) => {
        lineThroughButton(idButton1)
        lineThroughButton(idButton2)

        //reset rows before highlight the used one
        var tr = document.getElementsByTagName("tr");
        var trList = Array.prototype.slice.call(tr);
        trList.forEach(row => row.style.backgroundColor = "");

        //highlight the used one
        let row = document.getElementById(idRow)
        row.style.backgroundColor = "#d2a500"
    }

    return (
        <Box>
        <Table borderAxis="both" aria-label="striped table" stripe="odd" sx={{ mt: 1, mb: 0}}>
            {/*<caption>Popisek příkladu </caption>*/}
            <thead>
            <tr>
                {/*Left Top corner*/}
                <th style={{ width: '15%', textAlign:"center" }}></th>
                {props.nodes.map(node => {
                    return <th>{node.id}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {props.nodes.map(node => {
                return <tr id={prefix + node.id} style={{backgroundColor: ""}} key={node.id}>
                    {/*column head*/}
                    <th scope="row" id={prefix + node.id} >{node.id}</th>
                    {props.nodes.map(nodeInner => {
                        //diagonal
                        if (node.id === nodeInner.id)
                            return <td style={{textAlign:"center"}}><Clear/></td>
                        // find edge of two vertexes
                        let edgeExist = props.edges.find(edge => ((edge.source === node.id && edge.target === nodeInner.id) || (edge.source === nodeInner.id && edge.target === node.id)))
                        if (edgeExist)
                            return <td style={{textAlign:"center"}}><Button size="sm" style={{ width:"100%", textDecoration:'none'}} id={prefix + "b" +node.id + nodeInner.id} onClick={() => changeStyles(prefix + "b" +node.id + nodeInner.id, prefix + node.id, prefix + "b" +nodeInner.id + node.id)}>1</Button></td>
                        return <td style={{textAlign:"center"}}>0</td>
                    })}
                </tr>
            })}
            </tbody>
        </Table>
        <FormControl sx={{mt: 0, mb: 1}}>
            <FormLabel>Hrany: {edges}</FormLabel>
            <FormLabel>{title}</FormLabel>
            <OrderingInput data={result} placeholder={placeHolderNode} />
            <FormLabel>Vrcholy:</FormLabel>
            <OrderingInput data={nodes} placeholder={placeHolderNode} />
            <FormLabel>Hrany stromové:</FormLabel>
            <OrderingInput data={edgesIn} placeholder={placeHolderEdges} />
            <FormLabel>Hrany nestromové:</FormLabel>
            <OrderingInput data={edgesOut} placeholder={placeHolderEdges} />
        </FormControl>
        </Box>
    );
}