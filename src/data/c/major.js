import MovableMajor from '../movable/major';
import OpenMajor from '../open/major';


export default {
    name: 'C Major',
    shortName: 'C',
    root: 'C',
    quality: 'major',
    chords: [{
        position: OpenMajor.C
    }, {
        position: MovableMajor.A1(3)
    }, {
        position: MovableMajor.E1(8)
    }, {
        position: MovableMajor.E2(8)
    }, {
        position: MovableMajor.D1(10)
    }]
};
