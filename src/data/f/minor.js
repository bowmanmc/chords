import MovableMinor from '../movable/minor';


export default {
    name: 'F Minor',
    shortName: 'Fm',
    root: 'F',
    quality: 'minor',
    chords: [{
        position: MovableMinor.E1(1)
    }, {
        position: MovableMinor.D1(3)
    }, {
        position: MovableMinor.A1(8)
    }, {
        position: MovableMinor.A2(8)
    }, {
        position: MovableMinor.E2(13)
    }]
};
