import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'D Major (D)',
    root: 'D',
    quality: 'major',
    chords: [{
        position: OpenMajor.D
    }, {
        position: MovableMajor.A1(5)
    }, {
        position: MovableMajor.A2(5)
    }, {
        position: MovableMajor.E1(10)
    }, {
        position: MovableMajor.E2(10)
    }]
};
