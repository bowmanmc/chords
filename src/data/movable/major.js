
export default {

    E1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                r,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                `${Number(r) + 1}`,
                r,
                r
            ],
            fingering: ['1','3','4','2','1','1']
        };
    },

    E2: (r) => {
        return {
            startFret: r-4,
            tabs: [
                r,
                `${Number(r) - 1}`,
                `${Number(r) - 3}`,
                `${Number(r) - 3}`,
                `${Number(r) - 3}`,
                'x'
            ],
            fingering: ['4','3','1','1','1','x']
        };
    },

    A1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x',
                r,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                `${Number(r) + 2}`,
                r
            ],
            fingering: ['x','1','3','3','3','1']
        }
    },

    A2: (r) => {
        return {
            startFret: r-4,
            tabs: [
                'x',
                r,
                `${Number(r) - 1}`,
                `${Number(r) - 3}`,
                `${Number(r) - 2}`,
                `${Number(r) - 3}`
            ],
            fingering: ['x','4','3','1','2','1']
        };
    },

    D1: (r) => {
        return {
            startFret: r-1,
            tabs: [
                'x','x', r,
                `${Number(r) + 2}`,
                `${Number(r) + 3}`,
                `${Number(r) + 2}`
            ],
            fingering: ['x','x','1','2','4','3']
        };
    }

}
