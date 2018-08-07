import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'A Major',
    shortName: 'A',
    root: 'A',
    quality: 'major',
    chords: [{
        position: OpenMajor.A
    }, {
        position: MovableMajor.E1(5)
    }, {
        position: MovableMajor.E2(5)
    }, {
        position: MovableMajor.D1(7)
    }, {
        position: MovableMajor.A2(12)
    }]
};
