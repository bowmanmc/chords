
export default {

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
            fingering: ['x','0','2','3','1','0']
        };
    },

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
