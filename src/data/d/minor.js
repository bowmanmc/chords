import MovableMinor from '../movable/minor';


export default {
    name: 'D Minor',
    shortName: 'Dm',
    root: 'D',
    quality: 'minor',
    positions: [{
        tabs: ['x','x','0','2','3','1'],
        fingering: ['x','x','0','2','3','1']
    },
        MovableMinor.A(5),
        MovableMinor.C(2),
        MovableMinor.E(10),
        MovableMinor.G(7)
    ]
};
