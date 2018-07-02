import MovableMinor from '../movable/minor';


export default {
    name: 'G Minor',
    shortName: 'Gm',
    root: 'G',
    quality: 'minor',
    positions: [{
        tabs: ['3','x','0','3','3','3'],
        fingering: ['1','x','0','2','3','4']
    },
        MovableMinor.E(3),
        MovableMinor.D(5),
        MovableMinor.A(10),
        MovableMinor.C(7),
    ]
};
