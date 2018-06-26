
export default {

    E: (s) => {
        return {
            startFret: s - 1,
            tabs: [
                s,
                `${Number(s) + 2}`,
                `${Number(s) + 2}`,
                `${Number(s) + 1}`,
                s,
                s
            ],
            fingering: ['1','3','4','2','1','1']
        };
    },

    G: (s) => {
        return {
            startFret: s - 1,
            tabs: [
                `${Number(s) + 3}`,
                `${Number(s) + 2}`,
                s, s, s, 'x'
            ],
            fingering: ['4','3','1','1','1','x']
        };
    },

    A: (s) => {
        return {
            startFret: s-1,
            tabs: [
                'x',
                s,
                `${Number(s) + 2}`,
                `${Number(s) + 2}`,
                `${Number(s) + 2}`,
                s
            ],
            fingering: ['x','1','3','3','3','1']
        }
    },

    C: (s) => {
        return {
            startFret: s-1,
            tabs: [
                'x',
                `${Number(s) + 3}`,
                `${Number(s) + 2}`,
                s,
                `${Number(s) + 1}`,
                s
            ],
            fingering: ['x','4','3','1','2','1']
        };
    },

    D: (s) => {
        return {
            startFret: s - 1,
            tabs: [
                'x','x', s,
                `${Number(s) + 2}`,
                `${Number(s) + 3}`,
                `${Number(s) + 2}`
            ],
            fingering: ['x','x','1','2','4','3']
        };
    }

}
