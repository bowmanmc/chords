import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major';


export default {
    name: 'G Major Seventh',
    shortName: 'Gmaj7',
    root: 'G',
    quality: 'maj7',
    positions: [
        OpenMajor7.G,
        MovableMajor7.E1(3),
        MovableMajor7.D1(5),
        MovableMajor7.D2(5),
        MovableMajor7.A1(10),
        MovableMajor7.A2(10)
    ]
};
