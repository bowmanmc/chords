import MovableMinor from '../movable/minor';


export default {
    name: 'A Minor',
    shortName: 'Am',
    root: 'A',
    quality: 'm',
    positions: [{
        tabs:      ['x','0','2','2','1','0'],
        fingering: ['x','0','2','3','1','0']
    },
        MovableMinor.E(5),
        MovableMinor.D(7),
        MovableMinor.C(9)
    ]
}
