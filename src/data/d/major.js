import MovableMajor from '../movable/major';


export default {
    name: 'D Major',
    shortName: 'D',
    root: 'D',
    quality: 'major',
    positions: [{
        tabs:      ['x','x','0','2','3','2'],
        fingering: ['x','x','0','1','3','2']
    },
        MovableMajor.C(2),
        MovableMajor.A(5),
        MovableMajor.G(7),
        MovableMajor.E(10)
    ]
};
