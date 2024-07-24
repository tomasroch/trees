const width = 50

export const exampleNodes = [
    {
        id: '1',
        position: {x: 190, y: 50},
        data: {text: "Vyber správný počet koster grafu: ",width:width, radio: [
                {value: "576", result: false},
                {value: "768", result: true},
                {value: "1024", result: false}
            ]},
        hidden: false,
        type:'radioButtonResultNode'
    },
    {
        id: 'a',
        position: {x: 0, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: 150, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'b',
        position: {x: 0, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'c',
        position: {x: 150, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 550, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 350, y: -80},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 350, y: -200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 500, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 650, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
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
        id: 'ad',
        source: 'a',
        target: 'd',
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
        id: 'bc',
        source: 'b',
        target: 'c',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'cd',
        source: 'c',
        target: 'd',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ef',
        source: 'e',
        target: 'f',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'dg',
        source: 'd',
        target: 'g',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'de',
        source: 'd',
        target: 'e',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'df',
        source: 'd',
        target: 'f',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'eg',
        source: 'e',
        target: 'g',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'fg',
        source: 'f',
        target: 'g',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'gh',
        source: 'g',
        target: 'h',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'hi',
        source: 'h',
        target: 'i',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'gi',
        source: 'g',
        target: 'i',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
]