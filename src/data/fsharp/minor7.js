import MovableMinor7 from '../movable/minor7';


export default {
    name: 'F♯ / G♭ Minor Seventh',
    shotName: 'F♯m7 / G♭m7',
    root: 'F♯ / G♭',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.E1(2)
    }, {
        position: MovableMinor7.E2(2)
    }, {
        position: MovableMinor7.D1(4)
    }, {
        position: MovableMinor7.A1(9)
    }, {
        position: MovableMinor7.A2(9)
    }, {
        position: MovableMinor7.A3(9)
    }]
};
