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
        MovableMinor.E1(3),
        MovableMinor.D1(5),
        MovableMinor.A1(10),
        MovableMinor.A2(10)
    ]
};
