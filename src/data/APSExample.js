export const exampleNodes = [
    {
        id: 'a',
        hidden: false,
        fifo:'a,c,d,e,f,g,b,h',
        fifoNodes:'a,c,d,e,f,g,b,h',
        fifoEdgesIn:'ac,ad,ae,cf,cg,db,fh',
        fifoEdgesOut:'ce,df,dg,eg,bh',
        lifo:'a,c,e,g,d,b,h,f',
        lifoNodes:'a,c,e,g,d,b,h,f',
        lifoEdgesIn:'ac,ce,eg,gd,db,bh,hf',
        lifoEdgesOut:'ea,gc,da,fc,fd',
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

]

export const exampleEdges = [
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
        id: 'ae',
        source: 'a',
        target: 'e',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'ce',
        source: 'c',
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
        id: 'cg',
        source: 'c',
        target: 'g',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'db',
        source: 'd',
        target: 'b',
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
    {
        id: 'fh',
        source: 'f',
        target: 'h',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: 'bh',
        source: 'b',
        target: 'h',
        hidden: false,
        animated: true,
        type: ''
    },
]