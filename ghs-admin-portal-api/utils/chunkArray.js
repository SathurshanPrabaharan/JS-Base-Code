
function chunkArray (array, perChunk) {
    const chuckArray = []
    for (let i = 0; i < array.length; i += perChunk) {
        const chunk = array.slice(i, i + perChunk);
        chuckArray.push(chunk)
    }

    return chuckArray;
}

module.exports = chunkArray