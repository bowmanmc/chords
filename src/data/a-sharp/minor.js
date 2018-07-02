import MovableMinor from '../movable/minor';


export default {
    name: 'A♯ / B♭ Minor',
    shortName: 'A♯m / B♭m',
    root: 'A♯ / B♭',
    quality: 'minor',
    positions: [
        MovableMinor.A(1),
        MovableMinor.E(6),
        MovableMinor.G(3),
        MovableMinor.D(8),
        MovableMinor.C(10)
    ]
};
