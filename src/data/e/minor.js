import MovableMinor from '../movable/minor';


export default {
    name: 'E Minor',
    shortName: 'Em',
    root: 'E',
    quality: 'minor',
    positions: [{
        tabs:      ['0','2','2','0','0','0'],
        fingering: ['0','1','2','0','0','0']
    },
        MovableMinor.D(2),
        MovableMinor.A(7),
        MovableMinor.C(4),
        MovableMinor.G(9)
    ]
};
