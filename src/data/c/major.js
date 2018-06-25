import MovableMajor from '../movable/major';


export default {
    name: 'C Major',
    shortName: 'C',
    root: 'C',
    quality: 'major',
    positions: [{
        tabs:      ['x','3','2','0','1','0'],
        fingering: ['x','3','2','0','1','0']
    },
        MovableMajor.A(3),
        MovableMajor.G(5),
        MovableMajor.E(8),
        MovableMajor.D(10)
    ]
};
