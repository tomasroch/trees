export const exampleNodes = [
    {
        id: '0',
        position: {x: -50, y: -100},
        data: {result: '000011000101110111', width:250, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '1',
        position: {x: -50, y: 0},
        data: {result: '0001100010111011', width:250, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -150, y: 100},
        data: {result: '0011', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '3',
        position: {x: 0, y: 100},
        data: {result: '00010111', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '4',
        position: {x: 150, y: 100},
        data: {result: '01', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    // 3. rada
    {
        id: '5',
        position: {x: -200, y: 200},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '6',
        position: {x: -25, y: 200},
        data: {result: '001011', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '7',
        position: {x: 75, y: 200},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //4. rada
    {
        id: '8',
        position: {x: -75, y: 300},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '9',
        position: {x: 25, y: 300},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
]

export const exampleEdges = [
    {
        id: '0-1',
        source: '0',
        target: '1',
        hidden: false,
        animated: true,
        type: ''
    },
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
        id: '3-7',
        source: '3',
        target: '7',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '6-8',
        source: '6',
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
        id: '7-10',
        source: '7',
        target: '10',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '7-11',
        source: '7',
        target: '11',
        hidden: false,
        animated: true,
        type: ''
    },
]