import MovableMajor7 from '../movable/major7';


export default {
    name: 'F♯ / G♭ Major Seventh',
    shortName: 'F♯maj7 / G♭maj7',
    root: 'F♯ / G♭',
    quality: 'maj7',
    positions: [
        MovableMajor7.E1(2),
        {
            tabs:      ['2','x','0','2','2','x'],
            fingering: ['1','x','0','3','4','x']
        },
        MovableMajor7.D1(4),
        MovableMajor7.D2(4),
        MovableMajor7.A1(9),
        MovableMajor7.A2(9)
    ]
};
