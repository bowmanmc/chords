
export default {

    E1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                r,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                r, r, r
            ],
            fingering: ['1','3','4','1','1','1']
        };
    },

    E2: (r) => {
        return {
            startFret: r-4,
            tabs: [
                r,
                'x',
                `${Number(r) - 3}`,
                r, r, 'x'
            ],
            fingering: ['2','x','1','3','4','x']
        }
    },

    A1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x',
                r,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                `${Number(r) + 1}`,
                r
            ],
            fingering: ['x','1','3','4','2','1']
        };
    },

    A2: (r) => {
        return {
            startFret: r-4,
            tabs: [
                'x',
                r,
                `${Number(r) - 2}`,
                `${Number(r) - 3}`,
                `${Number(r) - 2}`,
                'x'
            ],
            fingering: ['x','4','2','1','3','x']
        };
    },

    D1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x','x',
                r,
                `${Number(r) + 2}`,
                `${Number(r) + 3}`,
                `${Number(r) + 1}`,
            ],
            fingering: ['x','x','1','3','4','2']
        }
    }
};
