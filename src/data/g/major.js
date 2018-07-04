import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'G Major',
    shortName: 'G',
    root: 'G',
    quality: 'major',
    positions: [
        OpenMajor.G,
        MovableMajor.E(3),
        MovableMajor.D(5),
        MovableMajor.C(7),
        MovableMajor.A(10)
    ]
};
