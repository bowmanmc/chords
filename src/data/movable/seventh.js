
export default {
    E1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                r,
                `${Number(r) + 2}`,
                r,
                `${Number(r) + 1}`,
                `${Number(r) + 3}`,
                r
            ],
            fingering: ['1','3','1','2','4','1']
        };
    },

    E2: (r) => {
        return {
            startFret: r-1,
            tabs: [
                r,'x',r,
                `${Number(r) + 1}`,
                r,'x'
            ],
            fingering: ['1','x','2','4','3','x']
        };
    },

    A1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x',
                r,
                `${Number(r) + 2}`,
                r,
                `${Number(r) + 2}`,
                r
            ],
            fingering: ['x','1','3','1','4','1']
        };
    },

    A2: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x', r,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                `${Number(r) + 3}`
            ],
            fingering: ['x','1','3','3','3','4']
        };
    },

    A3: (r) => {
        return {
            startFret: r-3,
            tabs: [
                'x',
                r,
                `${Number(r) - 1}`,
                r,
                `${Number(r) - 2}`,
                'x'
            ],
            fingering: ['x','3','2','4','1','x']
        };
    },

    D1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x', 'x', r,
                `${Number(r) + 2}`,
                `${Number(r) + 1}`,
                `${Number(r) + 2}`
            ],
            fingering: ['x','x','1','3','2','4']
        };
    }
};
