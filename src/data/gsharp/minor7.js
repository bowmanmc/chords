import MovableMinor7 from '../movable/minor7';


export default {
    name: 'G♯ / A♭ Minor Seventh',
    shortName: 'G♯m7 / A♭m7',
    root: 'G♯ / A♭',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.E1(4)
    }, {
        position: MovableMinor7.E2(4)
    }, {
        position: MovableMinor7.D1(6)
    }, {
        position: MovableMinor7.A1(11)
    }, {
        position: MovableMinor7.A2(11)
    }, {
        position: MovableMinor7.A3(11)
    }]
};
