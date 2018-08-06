import OpenMajor from './major';
import OpenMinor from './minor';


export default {
    name: 'Open Chords',
    description: `Open chords, sometimes called Cowboy Chords,
        are played using open strings and
        the first three frets of the guitar. These should
        be the first ones you learn as  
        mastering them will
        allow you to play thousands of songs.`,
    chords: [{
        name: 'E Major', description: 'E',
        position: OpenMajor.E
    }, {
        name: 'E Minor', description: 'Em',
        position: OpenMinor.E
    }, {
        name: 'G Major', description: 'G',
        position: OpenMajor.G
    }, {
        name: 'A Major', description: 'A',
        position: OpenMajor.A
    }, {
        name: 'A Minor', description: 'Am',
        position: OpenMinor.A
    }, {
        name: 'C Major', description: 'C',
        position: OpenMajor.C
    }, {
        name: 'D Major', description: 'D',
        position: OpenMajor.D
    }, {
        name: 'D Minor', description: 'Dm',
        position: OpenMinor.D
    }]
};
