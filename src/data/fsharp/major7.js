import MovableMajor7 from '../movable/major7';


export default {
    name: 'F♯ / G♭ Major Seventh (F♯maj7 / G♭maj7)',
    shortName: 'F♯maj7 / G♭maj7',
    root: 'F♯ / G♭',
    quality: 'maj7',
    chords: [{
        position: {
            tabs: ['2','4','3','3','2','2'],
            fingering: ['1','4','2','3','1','1']
        }
    }, {
        position: {
            tabs: ['2', 'x', '0', '2', '2', 'x'],
            fingering: ['1', 'x', '0', '3', '4', 'x']
        }
    }, {
        position: MovableMajor7.D1(4)
    }, {
        position: MovableMajor7.D2(4)
    }, {
        position: MovableMajor7.A1(9)
    }, {
        position: MovableMajor7.A2(9)
    }]
};
