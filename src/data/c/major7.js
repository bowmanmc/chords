import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'C Major Seventh (Cmaj7)',
    root: 'C',
    quality: 'maj7',
    chords: [{
        position: OpenMajor7.C
    }, {
        position: MovableMajor7.A1(3)
    }, {
        position: MovableMajor7.E1(8)
    }, {
        position: MovableMajor7.E2(8)
    }, {
        position: MovableMajor7.D1(10)
    }, {
        position: MovableMajor7.D2(10)
    }]
};
