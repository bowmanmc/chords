import MovableMinor7 from '../movable/minor7';
import OpenMinor7 from '../open/minor7';


export default {
    name: 'B Minor Seventh',
    shortName: 'Bm7',
    root: 'B',
    quality: 'm7',
    chords: [{
        position: OpenMinor7.B
    }, {
        position: MovableMinor7.A1(2)
    }, {
        position: MovableMinor7.A2(2)
    }, {
        position: MovableMinor7.E1(7)
    }, {
        position: MovableMinor7.E2(7)
    }, {
        position: MovableMinor7.D1(9)
    }]
};
