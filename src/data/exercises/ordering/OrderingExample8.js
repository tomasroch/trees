const width = 64

export const exampleNodes = [
    {
        id: '101',
        position: {x: -100, y: -100},
        data: {
            preOrder: [28, 16, 10, 8, 4, 2, 12, 38, 30, 32, 40],
            inOrder: [2, 4, 8, 10, 12, 16, 28, 30, 32, 38, 40],
            postOrder: [2, 4, 8, 12, 10, 16, 32, 30, 40, 38, 28],
            levelOrder: [28, 16, 38, 10, 30, 40, 8, 12, 32, 4, 2],
        },
        hidden: false,
        type:'orderingButtonNode'
    },
    {
        id: '1',
        position: {x: -32, y: 0},
        data: {result: 28, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    //2. rada
    {
        id: '2',
        position: {x: -292, y: 70},
        data: {result: 16, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '3',
        position: {x: 228, y: 70},
        data: {result: 38, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    // 3. rada
    {
        id: '4',
        position: {x: -416, y: 140},
        data: {result: 10, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '6',
        position: {x: 96, y: 140},
        data: {result: 30, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '7',
        position: {x: 352, y: 140},
        data: {result: 40, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    // 4. rada
    {
        id: '8',
        position: {x: -480, y: 210},
        data: {result: 8, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '9',
        position: {x: -352, y: 210},
        data: {result: 12, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    {
        id: '13',
        position: {x: 160, y: 210},
        data: {result: 32, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    //5. rada
    {
        id: '16',
        position: {x: -512, y: 280},
        data: {result: 4, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
    },
    // 6. rada
    {
        id: '34',
        position: {x: -544, y: 350},
        data: {result: 2, width:width , processing: false, processed: false},
        hidden: false,
        type:'orderingNode'
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
    {
        id: '16-34',
        source: '16',
        target: '34',
        hidden: false,
        animated: true,
        type: ''
    },
    {
        id: '16-35',
        source: '16',
        target: '35',
        hidden: false,
        animated: true,
        type: ''
    },

]