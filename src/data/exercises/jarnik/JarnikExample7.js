const width = 50

export const exampleNodes = [
    {
        id: '0',
        position: {x: 430, y: 0},
        data: {
            value: "ab, ef, jk, cf, dg, hi, de, kl, bc, ad, fi, be, gh, eh, il, hk, gj",
            placeHolder: "ac, fh, ad...",
            label: "Seznam všech hran: ",
            width: 400
        },
        hidden: false,
        type:'inputInfoNode'
    },
    {
        id: '1',
        position: {x: 430, y: 60},
        data: {
            placeHolder: "ac5, fh2, ad3...",
            label: "Pomocné pole pro incidentní hrany:",
            width: 400
        },
        hidden: false,
        type:'inputHelperNode'
    },
    {
        id: '2',
        position: {x: 430, y: 120},
        data: {
            value: "",
            result: "ab,bc,cf,ef,de,dg,fi,hi,il,kl,jk",
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
        position: {x: 200, y: 0},
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
        id: 'd',
        position: {x: 0, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 200, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 350, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 0, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 200, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 350, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 0, y: 450},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'k',
        position: {x: 200, y: 450},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'l',
        position: {x: 350, y: 450},
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
    },    {
        id: 'jk',
        source: 'j',
        target: 'k',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cf',
        source: 'c',
        target: 'f',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'dg',
        source: 'd',
        target: 'g',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },    {
        id: 'hi',
        source: 'h',
        target: 'i',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'de',
        source: 'd',
        target: 'e',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'kl',
        source: 'k',
        target: 'l',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },    {
        id: 'bc',
        source: 'b',
        target: 'c',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ad',
        source: 'a',
        target: 'd',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fi',
        source: 'f',
        target: 'i',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },    {
        id: 'be',
        source: 'b',
        target: 'e',
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
        id: 'eh',
        source: 'e',
        target: 'h',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },    {
        id: 'il',
        source: 'i',
        target: 'l',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hk',
        source: 'h',
        target: 'k',
        data: {value :'9'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'gj',
        source: 'g',
        target: 'j',
        data: {value :'10'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
]