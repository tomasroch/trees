export const exampleNodes = [
    {
        id: '1',
        position: {x: -50, y: 0},
        data: {result: '00100100101111', width:250, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -150, y: 100},
        data: {result: '01', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '4',
        position: {x: 150, y: 100},
        data: {result: '0010010111', width:150, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    // 3. rada
    {
        id: '7',
        position: {x: 125, y: 200},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '8',
        position: {x: 225, y: 200},
        data: {result: '001011', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    //4. rada
    {
        id: '10',
        position: {x: 175, y: 300},
        data: {result: '01', width:100, placeHolder: "Kód..."},
        hidden: false,
        type:'commonNode'
    },
    {
        id: '11',
        position: {x: 275, y: 300},
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
        id: '2-6',
        source: '2',
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
        id: '4-8',
        source: '4',
        target: '8',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '5-9',
        source: '5',
        target: '9',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '8-10',
        source: '8',
        target: '10',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '8-11',
        source: '8',
        target: '11',
        hidden: false,
        animated: true,
        type: ''
    },
]