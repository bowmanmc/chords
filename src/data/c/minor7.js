import MovableMinor7 from "../movable/minor7";


export default {
    name: 'C Minor Seventh',
    shortName: 'Cm7',
    root: 'C',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.A1(3)
    }, {
        position: MovableMinor7.A2(3)
    }, {
        position: MovableMinor7.A3(3)
    }, {
        position: MovableMinor7.E1(8)
    }, {
        position: MovableMinor7.E2(8)
    }, {
        position: MovableMinor7.D1(10)
    }]
};
