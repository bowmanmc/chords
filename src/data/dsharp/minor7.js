import MovableMinor7 from '../movable/minor7';


export default {
    name: 'D♯ / E♭ Minor Seventh',
    shotName: 'D♯m7 / E♭m7',
    root: 'D♯ / E♭',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.D1(1)
    }, {
        position: MovableMinor7.A1(6)
    }, {
        position: MovableMinor7.A2(6)
    }, {
        position: MovableMinor7.A3(6)
    }, {
        position: MovableMinor7.E1(11)
    }, {
        position: MovableMinor7.E2(11)
    }]
};
