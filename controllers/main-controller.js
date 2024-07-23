const { URL_1, URL_2 } = require('../constants/constants');
const { makeHttpCall } = require('../utility/axios-utility');
const mainService = require('../services/main-service');

exports.processData = async function () {
    const [data1, data2] = await Promise.all([
        makeHttpCall(URL_1),
        makeHttpCall(URL_2)
    ]);

    const mergedData = await mainService.mergeData(data1, data2);

    console.log('mergedData before', mergedData);

    const sortedById = await mainService.sortData(mergedData, 'id');

    console.log('sortedById', sortedById);

    const sortedByType = await mainService.sortData(mergedData, 'type');

    console.log('sortedByType', sortedByType);

    console.log('mergedData after', mergedData);
}
