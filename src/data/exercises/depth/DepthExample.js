const width = 50

export const exampleNodes = [
    {
        id: '1',
        position: {x: -200, y: 240},
        data: {
            value: "",
            result: "3",
            placeHolder: "Zadej počet vrstev...",
            label: "Kolik vrstev má následující strom:",
            width: 180
        },
        hidden: false,
        type:'inputResultKruskalNode'
    },
    {
        id: '2',
        position: {x: 50, y: 240},
        data: {
            value: "",
            result: "1",
            placeHolder: "Zadej číslo vrstvy...",
            label: "V jaké vrstvě se nachází vrchol c:",
            width: 180
        },
        hidden: false,
        type:'inputResultKruskalNode'
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
        position: {x: -100, y: 100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'c',
        position: {x: 100, y: 100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: -150, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: -50, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 50, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 150, y: 200},
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


]