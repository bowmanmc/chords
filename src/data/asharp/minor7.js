import MovableMinor7 from '../movable/minor7';


export default {
    name: 'A♯ / B♭ Minor Seventh',
    shortName: 'A♯m7 / B♭m7',
    root: 'A♯ / B♭',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.A1(1)
    }, {
        position: MovableMinor7.A2(1)
    }, {
        position: MovableMinor7.E1(6)
    }, {
        position: MovableMinor7.E2(6)
    }, {
        position: MovableMinor7.D1(8)
    }, {
        position: MovableMinor7.A3(13)
    }]
};
