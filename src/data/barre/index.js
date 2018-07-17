import MovableMajor from '../movable/major';
import MovableMinor from '../movable/minor';
import MovableSeventh from '../movable/seventh';


export default {
    type: 'collection',
    name: 'Barre Chords',
    description: `Barre Chords are movable chord shapes you can play all along
                  the fretboard. `,
    chords: [{
        name: '6th String Major',
        hideFretLabels: true,
        position: MovableMajor.E1(5)
    }, {
        name: '5th String Major',
        hideFretLabels: true,
        position: MovableMajor.A1(5)
    }, {
        name: '4th String Major',
        hideFretLabels: true,
        position: MovableMajor.D1(5)
    }, {
        name: '6th String Minor',
        hideFretLabels: true,
        position: MovableMinor.E1(5)
    }, {
        name: '5th String Minor',
        hideFretLabels: true,
        position: MovableMinor.A1(5)
    }, {
        name: '4th String Minor',
        hideFretLabels: true,
        position: MovableMinor.D1(5)
    }, {
        name: '6th String Seventh',
        hideFretLabels: true,
        position: MovableSeventh.E1(5)
    }, {
        name: '5th String Seventh',
        hideFretLabels: true,
        position: MovableSeventh.A1(5)
    }, {
        name: '4th String Seventh',
        hideFretLabels: true,
        position: MovableSeventh.D1(5)
    }]
};
