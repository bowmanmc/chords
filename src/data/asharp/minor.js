import MovableMinor from '../movable/minor';


export default {
    name: 'A♯ / B♭ Minor (A♯m / B♭m)',
    root: 'A♯ / B♭',
    quality: 'minor',
    chords: [{
        position: MovableMinor.A1(1)
    }, {
        position: MovableMinor.E1(6)
    }, {
        position: MovableMinor.E2(6)
    }, {
        position: MovableMinor.D1(8)
    }, {
        position: MovableMinor.A2(13)
    }]
};
