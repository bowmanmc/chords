import MovableMinor7 from '../movable/minor7';


export default {
    name: 'F Minor Seventh',
    shotName: 'Fm7',
    root: 'F',
    quality: 'm7',
    chords: [{
        position: MovableMinor7.E1(1)
    }, {
        position: MovableMinor7.E2(1)
    }, {
        position: MovableMinor7.D1(3)
    }, {
        position: MovableMinor7.A1(8)
    }, {
        position: MovableMinor7.A2(8)
    }, {
        position: MovableMinor7.A3(8)
    }]
};
