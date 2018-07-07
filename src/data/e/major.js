import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'E Major',
    shortName: 'E',
    root: 'E',
    quality: 'major',
    positions: [
        OpenMajor.E,
        MovableMajor.D1(2),
        MovableMajor.A1(7),
        MovableMajor.A2(7),
        MovableMajor.E2(12),
    ]
};
