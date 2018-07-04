import MovableSeventh from '../movable/seventh';


export default {
    name: 'B Seventh',
    shortName: 'B7',
    root: 'B',
    quality: 'seventh',
    positions: [{
        tabs:      ['x','2','1','2','0','2'],
        fingering: ['x','2','1','3','0','4']
    },
        MovableSeventh.A1(2),
        MovableSeventh.A2(2),
        MovableSeventh.E1(7),
        MovableSeventh.E2(7),
        MovableSeventh.D1(9)
    ]
};
