import OpenMajor from './major';
import OpenMinor from './minor';


export default {
    type: 'collection',
    name: 'Open Chords',
    description: `Open chords, sometimes called Cowboy Chords,
        are played using open strings and
        the first three frets of the guitar. These should
        be the first ones you learn as  
        mastering them will
        allow you to play thousands of songs.`,
    chords: {
        all: [{
            name: 'E Major', shortName: 'E',
            root: 'E', quality: 'major',
            position: OpenMajor.E
        }, {
            name: 'E Minor', shortName: 'Em',
            root: 'E', quality: 'minor',
            position: OpenMinor.E
        }, {
            name: 'G Major', shortName: 'G',
            root: 'G', quality: 'major',
            position: OpenMajor.G
        }, {
            name: 'A Major', shortName: 'A',
            root: 'A', quality: 'major',
            position: OpenMajor.A
        }, {
            name: 'A Minor', shortName: 'Am',
            root: 'A', quality: 'minor',
            position: OpenMinor.A
        }, {
            name: 'C Major', shortName: 'C',
            root: 'C', quality: 'major',
            position: OpenMajor.C
        }, {
            name: 'D Major', shortName: 'D',
            root: 'D', quality: 'major',
            position: OpenMajor.D
        }, {
            name: 'D Minor', shortName: 'Dm',
            root: 'D', quality: 'minor',
            position: OpenMinor.D
        }]
    }
};
