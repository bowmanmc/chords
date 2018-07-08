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
        MovableMinor.A1(5),
        MovableMinor.A2(5),
        MovableMinor.E1(10),
        MovableMinor.E2(10)
    ]
};
