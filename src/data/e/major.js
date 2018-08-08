import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'E Major',
    shortName: 'E',
    root: 'E',
    quality: 'major',
    chords: [{
        position: OpenMajor.E
    }, {
        position: MovableMajor.D1(2)
    }, {
        position: MovableMajor.A1(7)
    }, {
        position: MovableMajor.A2(7)
    }, {
        position: MovableMajor.E2(12)
    }]
};
