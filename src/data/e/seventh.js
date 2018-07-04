import MovableSeventh from '../movable/seventh';


export default {
    name: 'E Seventh',
    shortName: 'E7',
    root: 'E',
    quality: 'seventh',
    positions: [{
        tabs:      ['0','2','0','1','0','0'],
        fingering: ['0','2','0','1','0','0']
    },
        MovableSeventh.D1(2),
        MovableSeventh.A1(7),
        MovableSeventh.A2(7),
        MovableSeventh.A3(7),
        MovableSeventh.E2(12)
    ]
};
