import MovableMinor from '../movable/minor';


export default {
    name: 'A♯ / B♭ Minor',
    shortName: 'A♯m / B♭m',
    root: 'A♯ / B♭',
    quality: 'minor',
    positions: [
        MovableMinor.A1(1),
        MovableMinor.E1(6),
        MovableMinor.E2(6),
        MovableMinor.D1(8),
        MovableMinor.A2(13)
    ]
};
