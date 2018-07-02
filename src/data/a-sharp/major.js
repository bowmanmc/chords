import MovableMajor from '../movable/major';


export default {
    name: 'A♯ / B♭ Major',
    shortName: 'A♯ / B♭',
    root: 'A♯ / B♭',
    quality: 'major',
    positions: [
        MovableMajor.A(1),
        MovableMajor.G(3),
        MovableMajor.E(6),
        MovableMajor.D(8),
        MovableMajor.C(10)
    ]
};
