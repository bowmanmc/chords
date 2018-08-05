import MovableMajor7 from '../movable/major7';


export default {
    name: 'B Major Seventh (Bmaj7)',
    root: 'B',
    quality: 'maj7',
    chords: [{
        position: MovableMajor7.A1(2)
    }, {
        position: MovableMajor7.E1(7)
    }, {
        position: MovableMajor7.E2(7)
    }, {
        position: MovableMajor7.D1(9)
    }, {
        position: MovableMajor7.D2(9)
    }, {
        position: MovableMajor7.A2(14)
    }]
};
