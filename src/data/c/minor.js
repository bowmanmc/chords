import MovableMinor from '../movable/minor';


export default {
    name: 'C Minor',
    shortName: 'Cm',
    root: 'C',
    quality: 'minor',
    positions: [{
        tabs: ['x', '3', '1', '0', '1', 'x'],
        fingering: ['x', '4', '1', '0', '2', 'x']
    },
        MovableMinor.A1(3),
        MovableMinor.E1(8),
        MovableMinor.E2(8),
        MovableMinor.D1(10)
    ]
};
