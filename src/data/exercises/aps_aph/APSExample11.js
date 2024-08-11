export const exampleNodes = [
    {
        id: 'a',
        hidden: false,
        fifo:'a,b,c,d,e,f,h,i,g',
        fifoNodes:'a,b,c,d,e,f,h,i,g',
        fifoEdgesIn:'ab,ac,bd,be,cf,dh,ei,fg',
        fifoEdgesOut:'bc,cd,de,ef,fh,gh,hi',
        lifo:'a,b,c,d,e,f,g,h,i',
        lifoNodes:'a,b,c,d,e,f,g,h,i',
        lifoEdgesIn:'ab,bc,cd,de,ef,fg,gh,hi',
        lifoEdgesOut:'ac,bd,be,cf,dh,fh,ei',
        prefixId: "11",
        type:''
    },
    {
        id: 'b',
        hidden: false,
        type:''
    },
    {
        id: 'c',
        hidden: false,
        type:''
    },
    {
        id: 'd',
        hidden: false,
        type:''
    },
    {
        id: 'e',
        hidden: false,
        type:''
    },
    {
        id: 'f',
        hidden: false,
        type:''
    },
    {
        id: 'g',
        hidden: false,
        type:''
    },
    {
        id: 'h',
        hidden: false,
        type:''
    },
    {
        id: 'i',
        hidden: false,
        type:''
    },

]

export const exampleEdges = [
    {
        id: 'ab',
        source: 'a',
        target: 'b',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'bc',
        source: 'c',
        target: 'b',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'cd',
        source: 'c',
        target: 'd',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'de',
        source: 'd',
        target: 'e',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'ef',
        source: 'e',
        target: 'f',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'fg',
        source: 'f',
        target: 'g',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'gh',
        source: 'g',
        target: 'h',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'hi',
        source: 'h',
        target: 'i',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'ac',
        source: 'a',
        target: 'c',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'bd',
        source: 'b',
        target: 'd',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'be',
        source: 'b',
        target: 'e',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'cf',
        source: 'c',
        target: 'f',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'dh',
        source: 'd',
        target: 'h',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'fh',
        source: 'f',
        target: 'h',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'ei',
        source: 'e',
        target: 'i',
        hidden: false,
        animated: true,
        type: ''
    },
]