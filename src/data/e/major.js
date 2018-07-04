import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'E Major',
    shortName: 'E',
    root: 'E',
    quality: 'major',
    positions: [
        OpenMajor.E,
        MovableMajor.D(2),
        MovableMajor.C(4),
        MovableMajor.A(7),
        MovableMajor.G(9)
    ]
};
