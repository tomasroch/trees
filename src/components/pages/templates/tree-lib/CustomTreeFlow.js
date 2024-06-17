import {addEdge, Background, Controls, ReactFlow, useEdgesState, useNodesState} from "reactflow";

import 'reactflow/dist/style.css';
import Card from "@mui/joy/Card";
import {CardCover} from "@mui/joy";
import React, {useCallback} from "react";
import PaymentInit from "./PaymentInit";
import PaymentCountry from "./PaymentCountry";
import PaymentProvider from "./PaymentProvider";
import PaymentProviderSelect from "./PaymentProviderSelect";
import CustomEdge from "./CustomEdge";
import CircleNode from "./CircleNode";
import TextNode from "./TextNode";
import CommonNode from "./CommonNode";

export const initialNodes = [
    {
        id: '1',
        position: {x: 0, y: 0},
        data: {label: '1'},
        hidden: false
    },
    {
        id: '2',
        position: {x: 0, y: 50},
        data: {label: '2'}
    },
    {
        id: '3',
        position: {x: 0, y: 100},
        data: {label: '3'}
    },
    {
        id: '4',
        position: {x: 100, y: 50},
        data: {amount: '10'},
        type: "paymentInit"
    },
    {
        id: "5",
        data: {currency: "$", country: "United States", countryCode: "US"},
        position: {x: 300, y: 0},
        type: "paymentCountry",
    },
    {
        id: "6",
        data: {currency: "£", country: "England", countryCode: "GB"},
        position: {x: 300, y: 100},
        type: "paymentCountry"
    },
    {
        id: "7",
        data: {name: "Google Pay", code: "Gp"},
        position: {x: 500, y: 0},
        type: "paymentProvider"
    },
    {
        id: "8",
        data: {name: "Stripe", code: "St"},
        position: {x: 500, y: 50},
        type: "paymentProvider"
    },
    {
        id: "9",
        data: {name: "Apple Pay", code: "Ap"},
        position: {x: 500, y: 100},
        type: "paymentProvider"
    },
    {
        id: "10",
        data: {},
        position: {x: 200, y: 0},
        type: "paymentProviderSelect"
    },
];
export const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        hidden: false,
        animated: true,
        type: ''
    }
];

const nodeTypes = {
    'paymentInit': PaymentInit,
    'paymentCountry': PaymentCountry,
    'paymentProvider': PaymentProvider,
    'paymentProviderSelect': PaymentProviderSelect,
    'circle': CircleNode,
    'textNode': TextNode,
    'minimalCodeNode': CommonNode
}

const edgeTypes = {
    'customEdge': CustomEdge
}

export default function CustomTreeFlow(props) {
    const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges)

    //connect edges
    const onConnect = useCallback((connection) => {
        const edge = {...connection, animated: true, id: `${edges.length}`, type:"customEdge",}; // type žádný nebo custom
        setEdges(prevEdges => addEdge(edge, prevEdges))
    }, [edges]);
 //TODO ten onconnect asi odmazat pokud nebude využívanej
    return (
        <Card variant="outlined"
              sx={{minWidth: 300, minHeight: 500, mb: 1}}>
            <CardCover>
                <ReactFlow nodes={nodes} edges={edges} fitView={true}
                           onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}
                           nodeTypes={nodeTypes} edgeTypes={edgeTypes}
                           className="overview">
                    <Background/>
                    <Controls/>
                    {/*<MiniMap/>*/}
                </ReactFlow>
            </CardCover>
        </Card>
    )
}