import {Background, ConnectionMode, Controls, ReactFlow, useEdgesState, useNodesState} from "reactflow";

import 'reactflow/dist/style.css';
import Card from "@mui/joy/Card";
import {CardCover} from "@mui/joy";
import React from "react";
import SwapEdge from "./SwapEdge";
import FloatingEdge from "./FloatingEdge";
import CommonNode from "./CommonNode";
import DeleteNode from "./DeleteNode";
import OrderingNode from "./OrderingNode";
import OrderingButtonNode from "./OrderingButtonNode";
import CenteringNode from "./CenteringNode";
import haldaNode from "./HaldaNode";
import SpanningNode from "./SpanningNode";
import InputInfoNode from "./InputInfoNode";
import InputHelperNode from "./InputHelperNode";
import InputResultKruskalNode from "./InputResultKruskalNode";
import RadioButtonResultNode from "./RadioButtonResultNode";

const nodeTypes = {
    'commonNode': CommonNode,
    'deleteNode': DeleteNode,
    'orderingNode': OrderingNode,
    'orderingButtonNode': OrderingButtonNode,
    'centeringNode': CenteringNode,
    'haldaNode': haldaNode,
    'spanningNode': SpanningNode,
    'inputInfoNode': InputInfoNode,
    'inputHelperNode': InputHelperNode,
    'inputResultKruskalNode': InputResultKruskalNode,
    'radioButtonResultNode': RadioButtonResultNode

}

const edgeTypes = {
    'swapEdge': SwapEdge,
    'floatingEdge': FloatingEdge,
}

export default function CustomTreeFlow(props) {
    const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges)

    return (
        <Card variant="outlined"
              sx={{minWidth: 300, minHeight: 500, mb: 1}}>
            <CardCover>
                <ReactFlow nodes={nodes} edges={edges} fitView={true}
                           onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
                           nodeTypes={nodeTypes} edgeTypes={edgeTypes} connectionMode={ConnectionMode.Loose}
                           className="overview">
                    <Background/>
                    <Controls/>
                    {/*<MiniMap/>*/}
                </ReactFlow>
            </CardCover>
        </Card>
    )
}