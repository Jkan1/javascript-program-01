
exports.mergeData = async function (...arr) {
    const result = [];
    for (const list of arr) {
        result.push(...list);
    }
    return result;
}

exports.sortData = async function (arr, prop) {
    return arr.slice().sort(
        (first, second) => {
            if (first[prop] > second[prop]) return 1;
            else if (first[prop] == second[prop]) return 0
            else return -1
        }
    );
}
