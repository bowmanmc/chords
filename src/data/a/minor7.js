import MovableMinor7 from '../movable/minor7';
import OpenMinor7 from '../open/minor7';


export default {
    name: 'A Minor Seventh',
    shortName: 'Am7',
    root: 'A',
    quality: 'm7',
    chords: [{
        position: OpenMinor7.A
    }, {
        position: MovableMinor7.E1(5)
    }, {
        position: MovableMinor7.E2(5)
    }, {
        position: MovableMinor7.D1(7)
    }, {
        position: MovableMinor7.A1(12)
    }, {
        position: MovableMinor7.A3(12)
    }]
};
