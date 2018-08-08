import MovableMinor from '../movable/minor';


export default {
    name: 'F♯ / G♭ Minor',
    shortName: 'F♯m / G♭m',
    root: 'F♯ / G♭',
    quality: 'minor',
    chords: [{
        position: MovableMinor.E1(2)
    }, {
        position: MovableMinor.D1(4)
    }, {
        position: MovableMinor.A1(9)
    }, {
        position: MovableMinor.A2(9)
    }, {
        position: MovableMinor.E2(14)
    }]
};
