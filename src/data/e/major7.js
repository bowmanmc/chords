import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'E Major Seventh',
    shortName: 'Emaj7',
    root: 'E',
    quality: 'maj7',
    positions: [
        OpenMajor7.E,
        MovableMajor7.D2(2),
        MovableMajor7.A1(7),
        MovableMajor7.A2(7),
        MovableMajor7.E2(12),
        MovableMajor7.D1(14)
    ]
};
