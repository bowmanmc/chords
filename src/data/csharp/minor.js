import MovableMinor from '../movable/minor';


export default {
    name: 'C♯ / D♭ Minor (C♯m / D♭m)',
    root: 'C♯ / D♭',
    quality: 'minor',
    chords: [{
        position: MovableMinor.A1(4)
    }, {
        position: MovableMinor.A2(4)
    }, {
        position: MovableMinor.E1(9)
    }, {
        position: MovableMinor.E2(9)
    }, {
        position: MovableMinor.D1(11)
    }]
};
