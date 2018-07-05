import OpenMajor from './major';


export default {
    type: 'collection',
    name: 'Open Chords',
    description: `Open chords, sometimes called Cowboy Chords,
        are played using open strings and
        the first three frets of the guitar. These should
        be the first ones you learn as  
        mastering them will
        allow you to play thousands of songs.`,
    chords: [{
        name: 'E Major', shortName: 'E',
        root: 'E', quality: 'major',
        position: OpenMajor.E
    }, {
        name: 'G Major', shortName: 'G',
        root: 'G', quality: 'major',
        position: OpenMajor.G
    }, {
        name: 'A Major', shortName: 'A',
        root: 'A', quality: 'major',
        position: OpenMajor.A
    }, {
        name: 'C Major', shortName: 'C',
        root: 'C', quality: 'major',
        position: OpenMajor.C
    }, {
        name: 'D Major', shortName: 'D',
        root: 'D', quality: 'major',
        position: OpenMajor.D
    }]
};
