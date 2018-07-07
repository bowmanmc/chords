import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'A Major',
    shortName: 'A',
    root: 'A',
    quality: 'major',
    positions: [
        OpenMajor.A,
        MovableMajor.E1(5),
        MovableMajor.E2(5),
        MovableMajor.D1(7),
        MovableMajor.A2(12)
    ]
}
