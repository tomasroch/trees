import React, {useCallback} from 'react';
import {EdgeLabelRenderer, getBezierPath, getStraightPath, useStore} from 'reactflow';

import {getEdgeParams} from './utils.js';
import {Input} from "@mui/joy";

function FloatingEdge({data, id, source, target, markerEnd, style}) {
    const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
    const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

    if (!sourceNode || !targetNode) {
        return null;
    }

    const {sx, sy, tx, ty, sourcePos, targetPos} = getEdgeParams(sourceNode, targetNode);

    const [edgePath, labelX, labelY] = getPathType();

    function getPathType() {
        if (data) {
            return getStraightPath({
                sourceX: sx,
                sourceY: sy,
                sourcePosition: sourcePos,
                targetPosition: targetPos,
                targetX: tx,
                targetY: ty,
            });
        } else {
            return getBezierPath({
                sourceX: sx,
                sourceY: sy,
                sourcePosition: sourcePos,
                targetPosition: targetPos,
                targetX: tx,
                targetY: ty,
            });
        }
    }


    return (
        <>
            <path
                id={id}
                className="react-flow__edge-path"
                d={edgePath}
                strokeWidth={5}
                markerEnd={markerEnd}
                style={style}
            />
            {data && <EdgeLabelRenderer>
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
                    <Input sx={{width: 35, height: 30, border: '1px solid'}}
                           size="sm" color="neutral" value={data.value}
                    />
                </div>
            </EdgeLabelRenderer>}

        </>
    );
}

export default FloatingEdge;
