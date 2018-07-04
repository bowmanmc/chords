import MovableSeventh from '../movable/seventh';


export default {
    name: 'D Seventh',
    shortName: 'D7',
    root: 'D',
    quality: 'seventh',
    positions: [{
        tabs: ['x','x','0','2','1','2'],
        fingering: ['x','x','0','2','1','3']
    },
        MovableSeventh.A1(5),
        MovableSeventh.A2(5),
        MovableSeventh.A3(5),
        MovableSeventh.E1(10),
        MovableSeventh.E2(10)
    ]
};
