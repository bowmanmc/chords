import MovableMinor from '../movable/minor';


export default {
    name: 'A Minor',
    shortName: 'Am',
    root: 'A',
    quality: 'minor',
    chords: [{
        position: {
            tabs: ['x', '0', '2', '2', '1', '0'],
            fingering: ['x', '0', '2', '3', '1', '0']
        }
    }, {
        position: MovableMinor.E1(5)
    }, {
        position: MovableMinor.E2(5)
    }, {
        position: MovableMinor.D1(7)
    }, {
        position: MovableMinor.A2(12)
    }]
}
