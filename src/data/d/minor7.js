import MovableMinor7 from '../movable/minor7';
import OpenMinor7 from '../open/minor7';


export default {
    name: 'D Minor Seventh',
    shortName: 'Dm7',
    root: 'D',
    quality: 'm7',
    chords: [{
        position: OpenMinor7.D
    }, {
        position: MovableMinor7.A1(5)
    }, {
        position: MovableMinor7.A2(5)
    }, {
        position: MovableMinor7.A3(5)
    }, {
        position: MovableMinor7.E1(10)
    }, {
        position: MovableMinor7.E2(10)
    }]
};
