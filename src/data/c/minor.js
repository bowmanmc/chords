import MovableMinor from '../movable/minor';


export default {
    name: 'C Minor',
    shortName: 'Cm',
    root: 'C',
    quality: 'm',
    positions: [{
        tabs: ['x', '3', '1', '0', '1', 'x'],
        fingering: ['x', '4', '1', '0', '2', 'x']
    },
        MovableMinor.A(3),
        MovableMinor.E(8),
        MovableMinor.G(5),
        MovableMinor.D(10)
    ]
};
