import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'C Major',
    shortName: 'C',
    root: 'C',
    quality: 'major',
    positions: [
        OpenMajor.C,
        MovableMajor.A1(3),
        MovableMajor.E1(8),
        MovableMajor.E2(8),
        MovableMajor.D1(10)
    ]
};
