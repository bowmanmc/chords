import MovableMinor7 from '../movable/minor7';


export default {
    name: 'C♯ / D♭ Minor Seventh',
    shortName: 'C♯m7 / D♭m7',
    root: 'C♯ / D♭',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.A1(4)
    }, {
        position: MovableMinor7.A2(4)
    }, {
        position: MovableMinor7.A3(4)
    }, {
        position: MovableMinor7.E1(9)
    }, {
        position: MovableMinor7.E2(9)
    }, {
        position: MovableMinor7.D1(11)
    }]
};
