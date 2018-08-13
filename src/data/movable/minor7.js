export default {

    E1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                r,
                `${Number(r) + 2}`,
                r,
                r, `${Number(r) + 3}`, r
            ],
            fingering: ['1','3','1','1','4','1']
        };
    },

    E2: (r) => {
        return {
            startFret: r-1,
            tabs: [
                r,
                'x',
                r,
                r, r, r
            ],
            fingering: ['2','x','3','3','3','3']
        };
    },

    A1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x', r, 'x',
                r, `${Number(r) + 1}`, r
            ],
            fingering: ['x','1','x','2','4','3']
        };
    },

    A2: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x', r, `${Number(r) + 2}`,
                r, `${Number(r) + 1}`, r
            ],
            fingering: ['x','1','3','1','2','1']
        };
    },

    A3: (r) => {
        return {
            startFret: r-3,
            tabs: [
                'x', r,
                `${Number(r) - 2}`, r,
                `${Number(r) - 2}`, r
            ],
            fingering: ['x','2','1','3','1','4']
        }
    },

    D1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x', 'x', r,
                `${Number(r) + 2}`,
                `${Number(r) + 1}`,
                `${Number(r) + 1}`
            ],
            fingering: ['x','x','1','4','2','3']
        };
    }
};
