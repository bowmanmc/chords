import MovableMinor from '../movable/minor';


export default {
    name: 'B Minor (Bm)',
    root: 'B',
    quality: 'minor',
    chords: [{
        position: MovableMinor.A1(2)
    }, {
        position: MovableMinor.E1(7)
    }, {
        position: MovableMinor.E2(7)
    }, {
        position: MovableMinor.D1(9)
    }, {
        position: MovableMinor.A2(14)
    }]
};
