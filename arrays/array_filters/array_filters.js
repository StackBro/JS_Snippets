function test1() {
    /**
     * Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки,
     *  поочередно выведите в console.log символ 'a', символ 'b', символ 'e'.
     * 
     * UPD: сделать произвольную строку и произвольный фильтр
     */
    //console.log(this.test2Func('abcde')); //Old task

    console.log(test1Func('abcdev prso',['a','b','c','s'])) //d, e, v, ' ', p, r, o
}
function test1Func(str,arr_filter){
   let arr = str.split('').filter(function(number){
       let filter_item = arr_filter.find(item =>{
           return number === item;
       });
       return filter_item === undefined;
   });
   arr.forEach(item => {console.log(item);});
}

test1();