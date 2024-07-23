const width = 50

export const exampleNodes = [
    {
        id: '0',
        position: {x: 80, y: 340},
        data: {
            value: "fg, gh, no, ab, di, hl, kn, mo, ch, jm, bg, de, kl, af, ij, bc, cd, hi, fk, lm",
            placeHolder: "ac, fh, ad...",
            label: "Seznam všech hran: ",
            width: 500
        },
        hidden: false,
        type:'inputInfoNode'
    },
    {
        id: '1',
        position: {x: 80, y: 400},
        data: {
            placeHolder: "ac5, fh2, ad3...",
            label: "Pomocné pole pro incidentní hrany:",
            width: 500
        },
        hidden: false,
        type:'inputHelperNode'
    },
    {
        id: '2',
        position: {x: 80, y: 460},
        data: {
            value: "",
            result: "ab,bg,fg,gh,hl,ch,kl,kn,no,mo,jm,ej,de,di",
            placeHolder: "ac, fh, ad...",
            label: "Začni přidávat hrany:",
            width: 500
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
        position: {x: 450, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'e',
        position: {x: 600, y: 0},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'f',
        position: {x: 0, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'g',
        position: {x: 150, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'h',
        position: {x: 300, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'i',
        position: {x: 450, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'j',
        position: {x: 600, y: 150},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'k',
        position: {x: 0, y: 300},
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
    {
        id: 'm',
        position: {x: 600, y: 300},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'n',
        position: {x: 0, y: 550},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
    {
        id: 'o',
        position: {x: 600, y: 550},
        data: {width:width},
        hidden: false,
        type:'spanningNode'
    },
]


export const exampleEdges = [
    {
        id: 'fg',
        source: 'f',
        target: 'g',
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
        id: 'no',
        source: 'n',
        target: 'o',
        data: {value :'1'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ej',
        source: 'e',
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
        id: 'di',
        source: 'd',
        target: 'i',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hl',
        source: 'h',
        target: 'l',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'kn',
        source: 'k',
        target: 'n',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'mo',
        source: 'm',
        target: 'o',
        data: {value :'2'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ch',
        source: 'c',
        target: 'h',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'jm',
        source: 'j',
        target: 'm',
        data: {value :'3'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'bg',
        source: 'b',
        target: 'g',
        data: {value :'4'},
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
        id: 'kl',
        source: 'k',
        target: 'l',
        data: {value :'4'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'af',
        source: 'a',
        target: 'f',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'ij',
        source: 'i',
        target: 'j',
        data: {value :'5'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'bc',
        source: 'b',
        target: 'c',
        data: {value :'7'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'cd',
        source: 'c',
        target: 'd',
        data: {value :'7'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'hi',
        source: 'h',
        target: 'i',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'fk',
        source: 'f',
        target: 'k',
        data: {value :'8'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
    {
        id: 'lm',
        source: 'l',
        target: 'm',
        data: {value :'9'},
        hidden: false,
        animated: false,
        type: 'floatingEdge'
    },
]