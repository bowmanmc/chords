import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'E Major Seventh (Emaj7)',
    shortName: 'Emaj7',
    root: 'E',
    quality: 'maj7',
    chords: [{
        position: OpenMajor7.E
    }, {
        position: MovableMajor7.D2(2)
    }, {
        position: MovableMajor7.A1(7)
    }, {
        position: MovableMajor7.A2(7)
    }, {
        position: MovableMajor7.E2(12)
    }, {
        position: MovableMajor7.D1(14)
    }]
};
