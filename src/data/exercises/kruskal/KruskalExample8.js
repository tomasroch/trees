const width = 50

export const exampleNodes = [
    {
        id: '1',
        position: {x: -200, y: 360},
        data: {
            value: "ad, bd, fj, kl, cd, eh, fi, gk, ac, be, cg, hl, cf, dh, ij, dg, jk, gh, hk",
            placeHolder: "ac, fh, ad...",
            label: "Seřazené hrany podle váhy:",
            width: 450
        },
        hidden: false,
        type:'inputInfoNode'
    },
    {
        id: '2',
        position: {x: -200, y: 420},
        data: {
            value: "",
            result: "ad,bd,fj,kl,cd,eh,fi,gk,be,cg,cf",
            placeHolder: "ac, fh, ad...",
            label: "Začni přidávat hrany:",
            width: 450
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
        position: {x: -100, y: 100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'd',
        position: {x: 100, y: 100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 300, y: 100},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: -200, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 0, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 200, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: -300, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: -100, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'k',
        position: {x: 100, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'l',
        position: {x: 300, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
]


export const exampleEdges = [
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
        id: 'bd',
        source: 'b',
        target: 'd',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fj',
        source: 'f',
        target: 'j',
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
        id: 'cd',
        source: 'c',
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
        id: 'fi',
        source: 'f',
        target: 'i',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'gk',
        source: 'g',
        target: 'k',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ac',
        source: 'a',
        target: 'c',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'be',
        source: 'b',
        target: 'e',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cg',
        source: 'c',
        target: 'g',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hl',
        source: 'h',
        target: 'l',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cf',
        source: 'c',
        target: 'f',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'dh',
        source: 'd',
        target: 'h',
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
        id: 'dg',
        source: 'd',
        target: 'g',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'jk',
        source: 'j',
        target: 'k',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'gh',
        source: 'g',
        target: 'h',
        data: {value :'6'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hk',
        source: 'h',
        target: 'k',
        data: {value :'6'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
]