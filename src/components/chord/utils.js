
export default {

    calculateTies: (fingering, tabs) => {
        let ties = {};
        let checks = {};
        fingering.forEach((f, i) => {
            if (f === 'x' || f === '0') {
                return;
            }
            if (Object.keys(checks).indexOf(f) >= 0) {
                ties[tabs[i]] = {
                    first: checks[f].first,
                    last: i,
                    tab: tabs[i],
                    finger: f
                };
            }
            else {
                checks[f] = {
                    first: i
                };
            }
        });
        return ties;
    }
}
