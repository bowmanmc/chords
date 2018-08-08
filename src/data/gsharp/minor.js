import MovableMinor from '../movable/minor';


export default {
    name: 'G♯ / A♭ Minor',
    shortName: 'G♯m / A♭m',
    root: 'G♯ / A♭',
    quality: 'minor',
    chords: [{
        position: MovableMinor.E1(4)
    }, {
        position: MovableMinor.E2(4)
    }, {
        position: MovableMinor.D1(6)
    }, {
        position: MovableMinor.A1(11)
    }, {
        position: MovableMinor.A2(11)
    }]
};
