import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'G Major',
    shortName: 'G',
    root: 'G',
    quality: 'major',
    positions: [
        OpenMajor.G,
        MovableMajor.E1(3),
        MovableMajor.D1(5),
        MovableMajor.A1(10),
        MovableMajor.A2(10)
    ]
};
