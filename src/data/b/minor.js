import MovableMinor from '../movable/minor';


export default {
    name: 'B Minor',
    shortName: 'Bm',
    root: 'B',
    quality: 'minor',
    positions: [
        MovableMinor.A1(2),
        MovableMinor.E1(7),
        MovableMinor.E2(7),
        MovableMinor.D1(9),
        MovableMinor.A2(14)
    ]
};
