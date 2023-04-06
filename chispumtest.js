const { test } = require("qunit");
const chispum = require("./chispum")

describe("chispum", () => {
    test("deberia imprimir 1 si recibe 1 , 2 ,4 ,7 ,8 ,11, 13 ,14 ,16 ,17", () => {
        const expected = 1;
        const result = chispum(1 ,2 ,3 ,4 ,7 ,8 ,11, 13 ,14 ,16 ,17)
        expec(expected).toBe(result);
    });

    test("Deberia imprimir chis si recibe 3 , 6, 9, 12, 18", () => {
        const expected = "chis";
        const result = chispum(3 , 6 , 9 ,12 ,18)
        expec(expected).toBe(result);
    });

    test("deberia impirmir pum si recibe 5", () => {
        const expected = "pum";
        const result = chispum(5,10,20)
        expec(expected).toBe(result);
    });

    test("deberia imprimir chispum si es 15", () => {
        const expected = "chispum";
        const result = chispum(15)
        expec(expected).toBe(result);
    })

}


 

12
