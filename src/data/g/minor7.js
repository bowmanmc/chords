import MovableMinor7 from '../movable/minor7';


export default {
    name: 'G Minor Seventh',
    shortName: 'Gm7',
    root: 'G',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.E1(3)
    }, {
        position: MovableMinor7.E2(3)
    }, {
        position: MovableMinor7.D1(5)
    }, {
        position: MovableMinor7.A1(10)
    }, {
        position: MovableMinor7.A2(10)
    }, {
        position: MovableMinor7.A3(10)
    }]
};
