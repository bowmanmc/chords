import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'D Major',
    shortName: 'D',
    root: 'D',
    quality: 'major',
    positions: [
        OpenMajor.D,
        MovableMajor.A1(5),
        MovableMajor.A2(5),
        MovableMajor.E1(10),
        MovableMajor.E2(10)
    ]
};
