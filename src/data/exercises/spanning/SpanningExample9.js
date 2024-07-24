const width = 50

export const exampleNodes = [
    {
        id: '1',
        position: {x: -110, y: -140},
        data: {text: "Vyber správný počet koster grafu: ",width:width, radio: [
                {value: "192", result: true},
                {value: "224", result: false},
                {value: "256", result: false}
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
        position: {x: 0, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'c',
        position: {x: 150, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: 150, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 350, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 350, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'k',
        position: {x: 500, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'l',
        position: {x: 500, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 250, y: -150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 250, y: -300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 150, y: -225},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 350, y: -225},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
]


export const exampleEdges = [
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
        id: 'cd',
        source: 'c',
        target: 'd',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ci',
        source: 'c',
        target: 'i',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ce',
        source: 'c',
        target: 'e',
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
        id: 'he',
        source: 'h',
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
        id: 'fh',
        source: 'f',
        target: 'h',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ei',
        source: 'e',
        target: 'i',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ik',
        source: 'i',
        target: 'k',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'kl',
        source: 'k',
        target: 'l',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'lj',
        source: 'l',
        target: 'j',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },
    {
        id: 'ji',
        source: 'j',
        target: 'i',
        hidden: false,
        animated: true,
        type: 'floatingEdge'
    },

]