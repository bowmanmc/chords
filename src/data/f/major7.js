import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'F Major Seventh',
    shortName: 'Fmaj7',
    root: 'F',
    quality: 'maj7',
    positions: [
        MovableMajor7.E1(1),
        OpenMajor7.F,
        MovableMajor7.D2(3),
        MovableMajor7.A1(8),
        MovableMajor7.A2(8),
        MovableMajor7.E2(13)
    ]
};
