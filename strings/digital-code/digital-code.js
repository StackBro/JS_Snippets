function test1() {
    /** Цифровой код
     * Напишите функцию, которая принимает в себя строку цифр и возвращает строку,
     * где любая цифра ниже 5 заменяется на 0,
     * а любая цифра от 5 и выше заменяется на 1.
     * example('45385593107843568') => '01011110001100111')
     */
    console.log(digitalCode('45385593107843568')); // => '01011110001100111')
}

function digitalCode(stringOfNumbers = '') {
    const arrSymbol = stringOfNumbers.split('');

    const newArr = arrSymbol.map((symbol) => {
        const zero = (symbol < 5);
        return zero ? 0 : 1;
    })

    return newArr.join('')
}

test1();