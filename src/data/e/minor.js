import MovableMinor from '../movable/minor';
import OpenMinor from '../open/minor';


export default {
    name: 'E Minor',
    shortName: 'Em',
    root: 'E',
    quality: 'minor',
    chords: [{
        position: OpenMinor.E
    }, {
        position: MovableMinor.D1(2)
    }, {
        position: MovableMinor.A1(7)
    }, {
        position: MovableMinor.A2(7)
    }, {
        position: MovableMinor.E2(12)
    }]
};
