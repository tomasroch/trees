export const exampleNodes = [
    {
        id: '1',
        position: {x: -75, y: 0},
        data: {result: '0000011011100001111000011111', width:300, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -150, y: 100},
        data: {result: '00001111', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '3',
        position: {x: 0, y: 100},
        data: {result: '0000110111', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '4',
        position: {x: 150, y: 100},
        data: {result: '00001111', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    // 3. rada
    {
        id: '5',
        position: {x: -205, y: 200},
        data: {result: '000111', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '6',
        position: {x: -55, y: 200},
        data: {result: '00011011', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '7',
        position: {x: 245, y: 200},
        data: {result: '000111', width:110, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //4. rada
    {
        id: '8',
        position: {x: -250, y: 300},
        data: {result: '0011', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '9',
        position: {x: -100, y: 300},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '11',
        position: {x: 0, y: 300},
        data: {result: '0011', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '10',
        position: {x: 175, y: 300},
        data: {result: '0011', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //5.rada
    {
        id: '12',
        position: {x: -300, y: 400},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '13',
        position: {x: -50, y: 400},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '14',
        position: {x: 225, y: 400},
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
        id: '1-3',
        source: '1',
        target: '3',
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
        id: '3-6',
        source: '3',
        target: '6',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '4-7',
        source: '4',
        target: '7',
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
        id: '6-11',
        source: '6',
        target: '11',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '7-10',
        source: '7',
        target: '10',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '8-12',
        source: '8',
        target: '12',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '11-13',
        source: '11',
        target: '13',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '10-14',
        source: '10',
        target: '14',
        hidden: false,
        animated: true,
        type: ''
    },
]