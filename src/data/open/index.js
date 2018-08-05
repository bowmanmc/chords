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
            positions: [OpenMajor.E]
        }, {
            name: 'E Minor', shortName: 'Em',
            root: 'E', quality: 'minor',
            positions: [OpenMinor.E]
        }, {
            name: 'G Major', shortName: 'G',
            root: 'G', quality: 'major',
            positions: [OpenMajor.G]
        }, {
            name: 'A Major', shortName: 'A',
            root: 'A', quality: 'major',
            positions: [OpenMajor.A]
        }, {
            name: 'A Minor', shortName: 'Am',
            root: 'A', quality: 'minor',
            positions: [OpenMinor.A]
        }, {
            name: 'C Major', shortName: 'C',
            root: 'C', quality: 'major',
            positions: [OpenMajor.C]
        }, {
            name: 'D Major', shortName: 'D',
            root: 'D', quality: 'major',
            positions: [OpenMajor.D]
        }, {
            name: 'D Minor', shortName: 'Dm',
            root: 'D', quality: 'minor',
            positions: [OpenMinor.D]
        }]
    }
};
