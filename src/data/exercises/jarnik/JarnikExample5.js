const width = 50

export const exampleNodes = [
    {
        id: '0',
        position: {x: -100, y: 440},
        data: {
            value: "ab, ad, cf, gh, kl, bd, eh, fh, hi, hj, ik, ef, eg, hk, ce, dg, fi, gj, jk, jl, be, de, bc",
            placeHolder: "ac, fh, ad...",
            label: "Seznam všech hran: ",
            width: 520
        },
        hidden: false,
        type:'inputInfoNode'
    },
    {
        id: '1',
        position: {x: -100, y: 500},
        data: {
            placeHolder: "ac5, fh2, ad3...",
            label: "Pomocné pole pro incidentní hrany:",
            width: 520
        },
        hidden: false,
        type:'inputHelperNode'
    },
    {
        id: '2',
        position: {x: -100, y: 560},
        data: {
            value: "",
            result: "ab,ad,dg,gh,eh,fh,cf,hi,hj,ik,kl",
            placeHolder: "ac, fh, ad...",
            label: "Začni přidávat hrany:",
            width: 350
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
        position: {x: 300, y: 0},
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
        id: 'e',
        position: {x: 300, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 450, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 300, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 450, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 600, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 450, y: 450},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'k',
        position: {x: 600, y: 450},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'l',
        position: {x: 600, y: 600},
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
        id: 'ad',
        source: 'a',
        target: 'd',
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
        id: 'gh',
        source: 'g',
        target: 'h',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'kl',
        source: 'k',
        target: 'l',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'bd',
        source: 'b',
        target: 'd',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'eh',
        source: 'e',
        target: 'h',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fh',
        source: 'f',
        target: 'h',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hi',
        source: 'h',
        target: 'i',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hj',
        source: 'h',
        target: 'j',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ik',
        source: 'i',
        target: 'k',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ef',
        source: 'e',
        target: 'f',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'eg',
        source: 'e',
        target: 'g',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hk',
        source: 'h',
        target: 'k',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ce',
        source: 'c',
        target: 'e',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'dg',
        source: 'd',
        target: 'g',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fi',
        source: 'f',
        target: 'i',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'gj',
        source: 'g',
        target: 'j',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'jk',
        source: 'j',
        target: 'k',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'jl',
        source: 'j',
        target: 'l',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'be',
        source: 'b',
        target: 'e',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'de',
        source: 'd',
        target: 'e',
        data: {value :'6'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'bc',
        source: 'b',
        target: 'c',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
]