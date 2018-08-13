import MovableMinor7 from '../movable/minor7';
import OpenMinor7 from '../open/minor7';


export default {
    name: 'E Minor Seventh',
    shotName: 'D♯m7 / E♭m7',
    root: 'E',
    quality: 'm7',
    chords: [{
        position: OpenMinor7.E
    }, {
        position: MovableMinor7.D1(2)
    }, {
        position: MovableMinor7.A1(7)
    }, {
        position: MovableMinor7.A2(7)
    }, {
        position: MovableMinor7.A3(7)
    }, {
        position: MovableMinor7.E2(12)
    }]
};
