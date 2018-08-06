import MovableMinor from '../movable/minor';


export default {
    name: 'D Minor (Dm)',
    root: 'D',
    quality: 'minor',
    chords: [{
        position: {
            tabs: ['x', 'x', '0', '2', '3', '1'],
            fingering: ['x', 'x', '0', '2', '3', '1']
        }
    }, {
        position: MovableMinor.A1(5)
    }, {
        position: MovableMinor.A2(5)
    }, {
        position: MovableMinor.E1(10)
    }, {
        position: MovableMinor.E2(10)
    }]
};
