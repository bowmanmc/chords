import MovableMinor from '../movable/minor';
import OpenMinor from '../open/minor';


export default {
    name: 'E Minor',
    shortName: 'Em',
    root: 'E',
    quality: 'minor',
    positions: [
        OpenMinor.E,
        MovableMinor.D1(2),
        MovableMinor.A1(7),
        MovableMinor.A2(7),
        MovableMinor.E2(12)
    ]
};
