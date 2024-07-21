export const exampleNodes = [
    {
        id: '1',
        position: {x: -50, y: 0},
        data: {result: '000100010111100010110111', width:250, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -200, y: 100},
        data: {result: '001000101111', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '4',
        position: {x: 200, y: 100},
        data: {result: '0001011011', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    // 3. rada
    {
        id: '5',
        position: {x: -290, y: 200},
        data: {result: '01', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '6',
        position: {x: -180, y: 200},
        data: {result: '00010111', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '7',
        position: {x: -70, y: 200},
        data: {result: '01', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '12',
        position: {x: 110, y: 200},
        data: {result: '001011', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '13',
        position: {x: 310, y: 200},
        data: {result: '01', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //4. rada
    {
        id: '9',
        position: {x: -225, y: 300},
        data: {result: '001011', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '10',
        position: {x: 50, y: 300},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '11',
        position: {x: 200, y: 300},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //5.rada
    {
        id: '14',
        position: {x: -275, y: 400},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '15',
        position: {x: -175, y: 400},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
]

export const exampleEdges = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '2-7',
        source: '2',
        target: '7',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '1-4',
        source: '1',
        target: '4',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '2-5',
        source: '2',
        target: '5',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '2-6',
        source: '2',
        target: '6',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '4-12',
        source: '4',
        target: '12',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '4-13',
        source: '4',
        target: '13',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '5-8',
        source: '5',
        target: '8',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '6-9',
        source: '6',
        target: '9',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '12-10',
        source: '12',
        target: '10',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '12-11',
        source: '12',
        target: '11',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '9-14',
        source: '9',
        target: '14',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '9-15',
        source: '9',
        target: '15',
        hidden: false,
        animated: true,
        type: ''
    },
]