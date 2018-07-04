import MovableSeventh from '../movable/seventh';


export default {
    name: 'G Seventh',
    shortName: 'G7',
    root: 'G',
    quality: 'seventh',
    positions: [{
        tabs:      ['3','2','0','0','0','1'],
        fingering: ['3','2','0','0','0','1']
    },
        MovableSeventh.E1(3),
        MovableSeventh.E2(3),
        MovableSeventh.D1(5),
        MovableSeventh.A1(10),
        MovableSeventh.A2(10),
        MovableSeventh.A3(10)
    ]
};
