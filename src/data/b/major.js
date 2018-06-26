import MovableMajor from '../movable/major';


export default {
    name: 'B Major',
    shortName: 'B',
    root: 'B',
    quality: 'major',
    positions: [
        MovableMajor.A(2),
        MovableMajor.G(4),
        MovableMajor.E(7),
        MovableMajor.D(9),
        MovableMajor.C(11)
    ]
};
