import MovableMajor from '../movable/major';


export default {
    name: 'A Major',
    shortName: 'A',
    root: 'A',
    quality: 'major',
    positions: [{
        tabs:      ['x','0','2','2','2','0'],
        fingering: ['x','0','2','3','4','0']
    },
        MovableMajor.G(2),
        MovableMajor.E(5),
        MovableMajor.D(7),
        MovableMajor.C(9)
    ]
}
