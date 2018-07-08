import MovableMinor from '../movable/minor';


export default {
    name: 'F Minor',
    shortName: 'Fm',
    root: 'F',
    quality: 'minor',
    positions: [
        MovableMinor.E1(1),
        MovableMinor.D1(3),
        MovableMinor.A1(8),
        MovableMinor.A2(8),
        MovableMinor.E2(13)
    ]
};
