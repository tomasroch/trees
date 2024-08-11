export const exampleNodes = [
    {
        id: 'a',
        hidden: false,
        fifo:'a,b,c,d,f,g,e',
        fifoNodes:'a,b,c,d,f,g,e',
        fifoEdgesIn:'ab,ac,ad,af,ag,be',
        fifoEdgesOut:'bc,bf,cd,de,ef,fg',
        lifo:'a,b,c,d,e,f,g',
        lifoNodes:'a,b,c,d,e,f,g',
        lifoEdgesIn:'ab,bc,cd,de,ef,fg',
        lifoEdgesOut:'ac,ad,be,af,bf,df,ag,dg,eg',
        prefixId: "9",
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
        source: 'b',
        target: 'c',
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
        id: 'ac',
        source: 'a',
        target: 'c',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'ad',
        source: 'a',
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
        id: 'af',
        source: 'a',
        target: 'f',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'bf',
        source: 'b',
        target: 'f',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'df',
        source: 'd',
        target: 'f',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'ag',
        source: 'a',
        target: 'g',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'dg',
        source: 'd',
        target: 'g',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'eg',
        source: 'e',
        target: 'g',
        hidden: false,
        animated: true,
        type: ''
    },
]