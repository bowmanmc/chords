import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'G Major',
    shortName: 'G',
    root: 'G',
    quality: 'major',
    chords: [{
        position: OpenMajor.G,
    }, {
        position: MovableMajor.E1(3)
    }, {
        position: MovableMajor.D1(5)
    }, {
        position: MovableMajor.A1(10)
    }, {
        position: MovableMajor.A2(10)
    }]
};
