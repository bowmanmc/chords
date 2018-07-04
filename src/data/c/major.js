import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'C Major',
    shortName: 'C',
    root: 'C',
    quality: 'major',
    positions: [
        OpenMajor.C,
        MovableMajor.A(3),
        MovableMajor.G(5),
        MovableMajor.E(8),
        MovableMajor.D(10)
    ]
};
