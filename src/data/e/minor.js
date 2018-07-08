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
        MovableMinor.D1(2),
        MovableMinor.A1(7),
        MovableMinor.A2(7),
        MovableMinor.E2(12)
    ]
};
