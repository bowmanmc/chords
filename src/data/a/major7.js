import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'A Major Seventh (Amaj7)',
    root: 'A',
    quality: 'maj7',
    chords: [{
        position: OpenMajor7.A
    }, {
        position: MovableMajor7.E1(5)
    }, {
        position: MovableMajor7.E2(5)
    }, {
        position: MovableMajor7.D1(7)
    }, {
        position: MovableMajor7.D2(7)
    }, {
        position: MovableMajor7.A2(12)
    }]
}
