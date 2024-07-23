const width = 50

export const exampleNodes = [
    {
        id: '0',
        position: {x: 150, y: 400},
        data: {
            value: "bg, ef, ij, ab, dg, hi, ce, jk, gj, fi, hk, eh, ik, ad, cf, fg, cd, df",
            placeHolder: "ac, fh, ad...",
            label: "Seznam všech hran: ",
            width: 450
        },
        hidden: false,
        type:'inputInfoNode'
    },
    {
        id: '1',
        position: {x: 150, y: 460},
        data: {
            placeHolder: "ac5, fh2, ad3...",
            label: "Pomocné pole pro incidentní hrany:",
            width: 450
        },
        hidden: false,
        type:'inputHelperNode'
    },
    {
        id: '2',
        position: {x: 150, y: 520},
        data: {
            value: "",
            result: "ab,bg,dg,ac,ce,ef,gj,ij,hi,jk",
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
        position: {x: 300, y: 50},
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
        position: {x: -200, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 0, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 200, y: 200},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: -200, y: 350},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 0, y: 350},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 200, y: 350},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'k',
        position: {x: -100, y: 500},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },

]


export const exampleEdges = [
    {
        id: 'bg',
        source: 'b',
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
        id: 'ij',
        source: 'i',
        target: 'j',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ab',
        source: 'a',
        target: 'b',
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
        id: 'ce',
        source: 'c',
        target: 'e',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'jk',
        source: 'j',
        target: 'k',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ac',
        source: 'a',
        target: 'c',
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
        id: 'fi',
        source: 'f',
        target: 'i',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hk',
        source: 'h',
        target: 'k',
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
        id: 'ik',
        source: 'i',
        target: 'k',
        data: {value :'6'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ad',
        source: 'a',
        target: 'd',
        data: {value :'7'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cf',
        source: 'c',
        target: 'f',
        data: {value :'7'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fg',
        source: 'f',
        target: 'g',
        data: {value :'7'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cd',
        source: 'c',
        target: 'd',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'df',
        source: 'd',
        target: 'f',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },

]