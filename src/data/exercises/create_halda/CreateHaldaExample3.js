const width = 64

export const exampleNodes = [
    {
        id: '1',
        position: {x: -32, y: 0},
        data: {result: '1', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -292, y: 70},
        data: {result: '7', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '3',
        position: {x: 228, y: 70},
        data: {result: '25', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    // 3. rada
    {
        id: '4',
        position: {x: -416, y: 140},
        data: {result: '23', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '5',
        position: {x: -160, y: 140},
        data: {result: '15', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '6',
        position: {x: 96, y: 140},
        data: {result: '35', nodesNewResult:[], width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '7',
        position: {x: 352, y: 140},
        data: {result: '30', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    // 4. rada
    {
        id: '8',
        position: {x: -480, y: 210},
        data: {result: '28', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '9',
        position: {x: -352, y: 210},
        data: {result: '29', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '10',
        position: {x: -224, y: 210},
        data: {result: '18', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '11',
        position: {x: -96, y: 210},
        data: {result: 'ㅤ', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '12',
        position: {x: 32, y: 210},
        data: {result: 'ㅤ', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '13',
        position: {x: 160, y: 210},
        data: {result: 'ㅤ', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '14',
        position: {x: 288, y: 210},
        data: {result: 'ㅤ', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
    {
        id: '15',
        position: {x: 416, y: 210},
        data: {result: 'ㅤ', width:width, placeHolder: ""},
        hidden: false,
        type:'haldaNode'
    },
]

export const exampleEdges = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '1-3',
        source: '1',
        target: '3',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '2-4',
        source: '2',
        target: '4',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '2-5',
        source: '2',
        target: '5',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '3-6',
        source: '3',
        target: '6',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '3-7',
        source: '3',
        target: '7',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '4-8',
        source: '4',
        target: '8',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '4-9',
        source: '4',
        target: '9',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '5-10',
        source: '5',
        target: '10',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '5-11',
        source: '5',
        target: '11',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '6-12',
        source: '6',
        target: '12',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '6-13',
        source: '6',
        target: '13',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '7-14',
        source: '7',
        target: '14',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
    {
        id: '7-15',
        source: '7',
        target: '15',
        hidden: false,
        animated: true,
        type: 'swapEdge'
    },
]