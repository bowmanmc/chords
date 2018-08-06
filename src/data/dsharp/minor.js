import MovableMinor from '../movable/minor';


export default {
    name: 'D♯ / E♭ Minor (D♯m / E♭m)',
    root: 'D♯ / E♭',
    quality: 'minor',
    chords: [{
        position: MovableMinor.D1(1)
    }, {
        position: MovableMinor.A1(6)
    }, {
        position: MovableMinor.A2(6)
    }, {
        position: MovableMinor.E1(11)
    }, {
        position: MovableMinor.E2(11)
    }]
};
