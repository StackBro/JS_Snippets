function test1() {
    /**
     * Напишите функцию, которая принимает строку и из строчных букв делает прописные, а прописные - строчными.
     */
    console.log(alternativeEntry('hello world'))    // => 'HELLO WORLD'
    console.log(alternativeEntry('HELLO WORLD'))   // => 'hello world'
    console.log(alternativeEntry('12345'))        // => '12345'
    console.log(alternativeEntry('1a2b3c4d5e'))  // => '1A2B3C4D5E'
}

/**
 * @param word {string}
 * @returns {string}
 */
function alternativeEntry(word = '') {
    const str = word.toString();
    const arr = str.split('')

    const newArr = arr.map((symbol) => {
        const isUpperCase = (symbol === symbol.toUpperCase());
        return isUpperCase ? symbol.toLowerCase() : symbol.toUpperCase();
    })

    return newArr.join('')
}

test1();

