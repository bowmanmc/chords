import MovableMajor from '../movable/major';


export default {
    name: 'E Major',
    shortName: 'E',
    root: 'E',
    quality: 'major',
    positions: [{
        tabs:      ['0','2','2','1','0','0'],
        fingering: ['0','2','3','1','0','0']
    },
        MovableMajor.D(2),
        MovableMajor.C(4),
        MovableMajor.A(7),
        MovableMajor.G(9)
    ]
};
