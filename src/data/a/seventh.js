import MovableSeventh from '../movable/seventh';


export default {
    name: 'A Seventh',
    shortName: 'A7',
    root: 'A',
    quality: 'seventh',
    positions: [{
        tabs:      ['x','0','2','0','2','0'],
        fingering: ['x','0','2','0','3','0']
    }, {
        tabs:      ['x','0','2','2','2','3'],
        fingering: ['x','0','1','1','1','2']
    },
        MovableSeventh.E1(5),
        MovableSeventh.E2(5),
        MovableSeventh.D1(7),
        MovableSeventh.A3(12)
    ]
}
