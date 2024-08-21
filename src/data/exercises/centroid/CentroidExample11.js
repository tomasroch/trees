const width = 20

export const exampleNodes = [
    {
        id: '1',
        position: {x: 100, y: 70},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '2',
        position: {x: 100, y: -70},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '3',
        position: {x: 200, y: 0},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '4',
        position: {x: 300, y: 0},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '5',
        position: {x: 400, y: 70},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '6',
        position: {x: 400, y: -70},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: '7',
        position: {x: 500, y: 70},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
]


export const exampleEdges = [
    {
        id: '1-3',
        source: '1',
        target: '3',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '2-3',
        source: '2',
        target: '3',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '3-4',
        source: '3',
        target: '4',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '4-5',
        source: '4',
        target: '5',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '4-6',
        source: '4',
        target: '6',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: '5-7',
        source: '7',
        target: '5',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
]