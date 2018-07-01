
export default {

    E: (s) => {
        return {
            startFret: s-1,
            tabs: [
                s,
                `${Number(s) + 2}`,
                `${Number(s) + 2}`,
                s,s,s
            ],
            fingering: ['1','3','4','1','1','1']
        };
    },

    G: (s) => {
        return {
            startFret: s-1,
            tabs: [
                `${Number(s) + 3}`,
                'x',
                s,
                `${Number(s) + 3}`,
                `${Number(s) + 3}`,
                'x'
            ],
            fingering: ['2','x','1','3','4','x']
        }
    },

    A: (s) => {
        return {
            startFret: s-1,
            tabs: [
                'x',
                s,
                `${Number(s) + 2}`,
                `${Number(s) + 2}`,
                `${Number(s) + 1}`,
                s
            ],
            fingering: ['x','1','3','4','2','1']
        };
    },

    D: (s) => {
        return {
            startFret: s-1,
            tabs: [
                'x','x',
                s,
                `${Number(s) + 2}`,
                `${Number(s) + 3}`,
                `${Number(s) + 1}`,
            ],
            fingering: ['x','x','1','3','4','2']
        }
    },

    C: (s) => {
        return {
            startFret: s-1,
            tabs: [
                'x',
                `${Number(s) + 3}`,
                `${Number(s) + 1}`,
                s,
                `${Number(s) + 1}`,
                'x'
            ],
            fingering: ['x','4','2','1','3','x']
        };
    }
};
