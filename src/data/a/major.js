import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'A Major',
    shortName: 'A',
    root: 'A',
    quality: 'major',
    positions: [
        OpenMajor.A,
        MovableMajor.G(2),
        MovableMajor.E(5),
        MovableMajor.D(7),
        MovableMajor.C(9)
    ]
}
