import MovableMinor from '../movable/minor';


export default {
    name: 'B Minor',
    shortName: 'Bm',
    root: 'B',
    quality: 'minor',
    positions: [
        MovableMinor.A(2),
        MovableMinor.E(7),
        MovableMinor.G(4),
        MovableMinor.D(9),
        MovableMinor.C(11)
    ]
};
