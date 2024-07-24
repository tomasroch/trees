const width = 50

export const exampleNodes = [
    {
        id: '1',
        position: {x: 300, y: 0},
        data: {text: "Vyber správný počet koster grafu: ",width:width, radio: [
                {value: "40", result: false},
                {value: "60", result: true},
                {value: "80", result: false}
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
        id: 'b',
        position: {x: 150, y: 50},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'c',
        position: {x: 150, y: -100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: 150, y: -250},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 300, y: -100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 300, y: -250},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 650, y: -300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 400, y: -400},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 550, y: -400},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 500, y: -150},
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
        id: 'ac',
        source: 'a',
        target: 'c',
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
        id: 'cf',
        source: 'c',
        target: 'f',
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
        id: 'fe',
        source: 'f',
        target: 'e',
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
        id: 'ij',
        source: 'i',
        target: 'j',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'je',
        source: 'j',
        target: 'e',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
]