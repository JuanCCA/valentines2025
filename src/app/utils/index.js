export const dupliclateAndShuffle = (arr) => {
    const newArr = [...arr, ...arr]
    newArr.sort(() => Math.random() - 0.5)
    return newArr
}

export const generateGifMatrix = (gifs) => {
    let index = 0;
    const gifMatrix = gifs.reduce((acc, gif) => {
        const {id} = gif;
        const key = id + index;
        acc[key] = {
            selected: false
        }
        index += 1;
        return acc;
    }, {})
    return gifMatrix
}