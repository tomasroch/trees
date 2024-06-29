import React from 'react';
import {BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow} from "reactflow";
import {SwapHorizontalCircle} from "@mui/icons-material";
import {IconButton} from "@mui/joy";

export default function SwapEdge(props) {
    const{id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition} = props;

    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition
    })

    const { setNodes } = useReactFlow();

    const handleOnClick = event => {
        let targetValue;
        let sourceValue;
        setNodes((nds) =>
            nds.map((node) => {
                if (node.type === 'haldaNode' && node.id === props.target)
                    targetValue = node.data.value

                if (node.type === 'haldaNode' && node.id === props.source)
                    sourceValue = node.data.value

                if (node.type === 'deleteNode' && node.id === props.target)
                    targetValue = node.data.result

                if (node.type === 'deleteNode' && node.id === props.source)
                    sourceValue = node.data.result

                return node;
            })
        );

        setNodes((nds) =>
            nds.map((node) => {
                if (node.type === 'haldaNode' && node.id === props.target)
                    node.data.value = sourceValue

                if (node.type === 'haldaNode' && node.id === props.source)
                    node.data.value = targetValue

                if (node.type === 'deleteNode' && node.id === props.target)
                    node.data.result = sourceValue

                if (node.type === 'deleteNode' && node.id === props.source)
                    node.data.result = targetValue

                return node;
            })
        );

    }

    return (
        <>
            <BaseEdge path={edgePath} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        fontSize: 12,
                        // everything inside EdgeLabelRenderer has no pointer events by default
                        // if you have an interactive element, set pointer-events: all
                        pointerEvents: 'all',
                    }}
                >
                    <IconButton onClick={handleOnClick}>
                        <SwapHorizontalCircle />
                    </IconButton>
                </div>
            </EdgeLabelRenderer>
        </>
    )
}
