import MovableMinor from '../movable/minor';


export default {
    name: 'A Minor',
    shortName: 'Am',
    root: 'A',
    quality: 'minor',
    positions: [{
        tabs:      ['x','0','2','2','1','0'],
        fingering: ['x','0','2','3','1','0']
    },
        MovableMinor.E1(5),
        MovableMinor.E2(5),
        MovableMinor.D1(7),
        MovableMinor.A2(12)
    ]
}
