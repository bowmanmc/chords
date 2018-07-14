import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'A Major Seventh',
    shortName: 'Amaj7',
    root: 'A',
    quality: 'maj7',
    positions: [
        OpenMajor7.A,
        MovableMajor7.E1(5),
        MovableMajor7.E2(5),
        MovableMajor7.D1(7),
        MovableMajor7.D2(7),
        MovableMajor7.A2(12)
    ]
}
