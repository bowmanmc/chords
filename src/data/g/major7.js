import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major';


export default {
    name: 'G Major Seventh (Gmaj7)',
    shortName: 'Gmaj7',
    root: 'G',
    quality: 'maj7',
    chords: [{
        position: OpenMajor7.G
    }, {
        position: MovableMajor7.E1(3)
    }, {
        position: MovableMajor7.D1(5)
    }, {
        position: MovableMajor7.D2(5)
    }, {
        position: MovableMajor7.A1(10)
    }, {
        position: MovableMajor7.A2(10)
    }]
};
