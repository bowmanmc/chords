import MovableMinor from '../movable/minor';


export default {
    name: 'C Minor (Cm)',
    root: 'C',
    quality: 'minor',
    chords: [{
        position: {
            tabs: ['x', '3', '1', '0', '1', 'x'],
            fingering: ['x', '4', '1', '0', '2', 'x']
        }
    }, {
        position: MovableMinor.A1(3)
    }, {
        position: MovableMinor.E1(8)
    }, {
        position: MovableMinor.E2(8)
    }, {
        position: MovableMinor.D1(10)
    }]
};
