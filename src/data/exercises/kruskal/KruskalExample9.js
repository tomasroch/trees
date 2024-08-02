const width = 50

export const exampleNodes = [
    {
        id: '1',
        position: {x: 30, y: 320},
        data: {
            value: "ae, be, cf, dg, ef, vc, fi, bf, ei, de, ij, ab, eh, gh, ge, dh",
            placeHolder: "ac, fh, ad...",
            label: "Seřazené hrany podle váhy:",
            width: 400
        },
        hidden: false,
        type:'inputInfoNode'
    },
    {
        id: '2',
        position: {x: 30, y: 380},
        data: {
            value: "",
            result: "ae,be,cf,dg,ef,fi,de,ij,eh",
            placeHolder: "ac, fh, ad...",
            label: "Začni přidávat hrany:",
            width: 400
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
        position: {x: 150, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'c',
        position: {x: 350, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 75, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: -100, y: 125},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: -200, y: 225},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: -50, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 350, y: 125},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 300, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 450, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },

]


export const exampleEdges = [
    {
        id: 'ae',
        source: 'a',
        target: 'e',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'be',
        source: 'b',
        target: 'e',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cf',
        source: 'c',
        target: 'f',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'dg',
        source: 'd',
        target: 'g',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ef',
        source: 'e',
        target: 'f',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'bc',
        source: 'b',
        target: 'c',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fi',
        source: 'f',
        target: 'i',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'bf',
        source: 'b',
        target: 'f',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ei',
        source: 'e',
        target: 'i',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'de',
        source: 'd',
        target: 'e',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ij',
        source: 'i',
        target: 'j',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ab',
        source: 'a',
        target: 'b',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'eh',
        source: 'e',
        target: 'h',
        data: {value :'6'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'gh',
        source: 'g',
        target: 'h',
        data: {value :'7'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ge',
        source: 'g',
        target: 'e',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'dh',
        source: 'd',
        target: 'h',
        data: {value :'9'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
]