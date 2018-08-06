import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'F Major Seventh (Fmaj7)',
    shortName: 'Fmaj7',
    root: 'F',
    quality: 'maj7',
    chords: [{
        position: MovableMajor7.E1(1)
    }, {
        position: OpenMajor7.F
    }, {
        position: MovableMajor7.D2(3)
    }, {
        position: MovableMajor7.A1(8)
    }, {
        position: MovableMajor7.A2(8)
    }, {
        position: MovableMajor7.E2(13)
    }]
};
