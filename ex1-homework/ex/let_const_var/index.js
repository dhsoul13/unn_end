/// ES6 1 let, const, var
/*
    1. let, const - имеет блочную видимость, var - глобальную
    example:
    let a = 5;
    if (true) {
    let a = 10;
    console.log(a); // => 10;
    }
    console.log(a); // => 5

    var a = 5;
    if (true) {
    var a = 10;
    console.log(a); // => 10;
    }
    console.log(a); // => 10

    2. var можно обращаться до того как объявили, с let нет
    example:
        b = 10;
        console.log(b) => 10
        var b = 25

        b = 10;
        console.log(b) => ReferenceError
        let b = 25

        Исключение: function ex(){
            a = 5
        }

        let a;
        ex()
        console.log(a)
    3. const => нельзя присваивать, но можно модифицировать
*/
