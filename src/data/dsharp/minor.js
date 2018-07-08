import MovableMinor from '../movable/minor';


export default {
    name: 'D♯ / E♭ Minor',
    shortName: 'D♯m / E♭m',
    root: 'D♯ / E♭',
    quality: 'minor',
    positions: [
        MovableMinor.D1(1),
        MovableMinor.A1(6),
        MovableMinor.A2(6),
        MovableMinor.E1(11),
        MovableMinor.E2(11)
    ]
};
