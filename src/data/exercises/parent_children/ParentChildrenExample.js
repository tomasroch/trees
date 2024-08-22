const width = 50

export const exampleNodes = [
    {
        id: 'a',
        position: {x: 0, y: -20},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'b',
        position: {x: -120, y: 100},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'c',
        position: {x: 120, y: 100},
        data: {result: false, width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: -180, y: 200},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'e',
        position: {x: -60, y: 200},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'f',
        position: {x: 60, y: 200},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'g',
        position: {x: 180, y: 200},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'h',
        position: {x: -210, y: 300},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'i',
        position: {x: -150, y: 300},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'j',
        position: {x: -90, y: 300},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'k',
        position: {x: -30, y: 300},
        data: {result: false, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'l',
        position: {x: 30, y: 300},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'm',
        position: {x: 90, y: 300},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'n',
        position: {x: 150, y: 300},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
    {
        id: 'o',
        position: {x: 210, y: 300},
        data: {result: true, width:width},
        hidden: false,
        type:'centeringNode'
    },
]


export const exampleEdges = [
    {
        id: 'ab',
        source: 'a',
        target: 'b',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ac',
        source: 'a',
        target: 'c',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'bd',
        source: 'b',
        target: 'd',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'be',
        source: 'b',
        target: 'e',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'cg',
        source: 'c',
        target: 'g',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'cf',
        source: 'c',
        target: 'f',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'dh',
        source: 'd',
        target: 'h',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'di',
        source: 'd',
        target: 'i',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ej',
        source: 'e',
        target: 'j',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ek',
        source: 'e',
        target: 'k',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'fl',
        source: 'f',
        target: 'l',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'fm',
        source: 'f',
        target: 'm',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'gn',
        source: 'g',
        target: 'n',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'go',
        source: 'g',
        target: 'o',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },


]