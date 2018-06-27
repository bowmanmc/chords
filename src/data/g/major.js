import MovableMajor from '../movable/major';


export default {
    name: 'G Major',
    shortName: 'G',
    root: 'G',
    quality: 'major',
    positions: [{
        tabs:      ['3','2','0','0','0','3'],
        fingering: ['2','1','0','0','0','3']
    },
        MovableMajor.E(3),
        MovableMajor.D(5),
        MovableMajor.C(7),
        MovableMajor.A(10)
    ]
};
