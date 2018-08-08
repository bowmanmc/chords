import MovableMinor from '../movable/minor';


export default {
    name: 'G Minor',
    shortName: 'Gm',
    root: 'G',
    quality: 'minor',
    chords: [{
        position: {
            tabs: ['3', 'x', '0', '3', '3', '3'],
            fingering: ['1', 'x', '0', '2', '3', '4']
        }
    }, {
        position: MovableMinor.E1(3)
    }, {
        position: MovableMinor.D1(5)
    }, {
        position: MovableMinor.A1(10)
    }, {
        position: MovableMinor.A2(10)
    }]
};
