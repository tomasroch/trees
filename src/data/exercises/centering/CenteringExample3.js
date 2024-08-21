const width = 20

export const exampleNodes = [
    {
        id: '1',
        position: {x: 0, y: 0},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '2',
        position: {x: 100, y: -50},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '3',
        position: {x: -100, y: -50},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '4',
        position: {x: 80, y: 100},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '5',
        position: {x: -80, y: 100},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '6',
        position: {x: 0, y: -100},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
]


export const exampleEdges = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '1-3',
        source: '1',
        target: '3',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '1-4',
        source: '1',
        target: '4',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '1-5',
        source: '1',
        target: '5',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '1-6',
        source: '1',
        target: '6',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
]