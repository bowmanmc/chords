import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'D Major',
    shortName: 'D',
    root: 'D',
    quality: 'major',
    positions: [
        OpenMajor.D,
        MovableMajor.C(2),
        MovableMajor.A(5),
        MovableMajor.G(7),
        MovableMajor.E(10)
    ]
};
