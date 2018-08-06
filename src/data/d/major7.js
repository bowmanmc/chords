import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'D Major Seventh (Dmaj7)',
    root: 'D',
    quality: 'maj7',
    chords: [{
        position: OpenMajor7.D
    }, {
        position: MovableMajor7.A1(5)
    }, {
        position: MovableMajor7.A2(5)
    }, {
        position: MovableMajor7.E1(10)
    }, {
        position: MovableMajor7.E2(10)
    }, {
        position: MovableMajor7.D2(12)
    }]
};
