const width = 64

export const exampleNodes = [
    {
        id: '101',
        position: {x: -100, y: -100},
        data: {
            preOrder: [42, 21, 4, 1, 5, 22, 32, 70, 52, 62],
            inOrder: [1, 4, 5, 21, 22, 32, 52, 52, 62, 70],
            postOrder: [1, 5, 4, 32, 22, 21, 62, 52, 70, 42],
            levelOrder: [42, 21, 70, 4, 22, 52, 1, 5, 32, 62],
        },
        hidden: false,
        type:'orderingButtonNode'
    },
    {
        id: '1',
        position: {x: -32, y: 0},
        data: {result: 42, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -292, y: 70},
        data: {result: 21, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '3',
        position: {x: 228, y: 70},
        data: {result: 70, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    // 3. rada
    {
        id: '4',
        position: {x: -416, y: 140},
        data: {result: 4, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '5',
        position: {x: -160, y: 140},
        data: {result: 22, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '6',
        position: {x: 96, y: 140},
        data: {result: 52, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    // 4. rada
    {
        id: '8',
        position: {x: -480, y: 210},
        data: {result: 1, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '9',
        position: {x: -352, y: 210},
        data: {result: 5, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '11',
        position: {x: -96, y: 210},
        data: {result: 32, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '13',
        position: {x: 160, y: 210},
        data: {result: 62, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    }
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
        id: '2-4',
        source: '2',
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
        id: '4-8',
        source: '4',
        target: '8',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '4-9',
        source: '4',
        target: '9',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '5-10',
        source: '5',
        target: '10',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '5-11',
        source: '5',
        target: '11',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '6-12',
        source: '6',
        target: '12',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '6-13',
        source: '6',
        target: '13',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '7-14',
        source: '7',
        target: '14',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '7-15',
        source: '7',
        target: '15',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '8-16',
        source: '8',
        target: '16',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '8-17',
        source: '8',
        target: '17',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '9-18',
        source: '9',
        target: '18',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '9-19',
        source: '9',
        target: '19',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '10-20',
        source: '10',
        target: '20',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '10-21',
        source: '10',
        target: '21',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '11-22',
        source: '11',
        target: '22',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '11-23',
        source: '11',
        target: '23',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '12-26',
        source: '12',
        target: '26',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '12-27',
        source: '12',
        target: '27',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '13-28',
        source: '13',
        target: '28',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '13-29',
        source: '13',
        target: '29',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '14-30',
        source: '14',
        target: '30',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '14-31',
        source: '14',
        target: '31',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '15-32',
        source: '15',
        target: '32',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '15-33',
        source: '15',
        target: '33',
        hidden: false,
        animated: true,
        type: ''
    },

]