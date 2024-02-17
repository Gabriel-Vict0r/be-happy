export function validate(cnpj: string) {
    const cnpjToTestFirstDV: string[] = cnpj.slice(0, 15).match(/\d/g);
    const cnpjToTestSecondDV: string[] = cnpj.slice(0, 17).match(/\d/g);

    const numerals: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const numerals2: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    //<----------- UTILS ----------->
    //multiply the first array with the second
    const multMatrix = ((arr1: string[], arr2: number[]) => {
        return arr1.map((el: string, i: number) => {
            return parseInt(el) * arr2[i];
        })
    })

    //Sum all the numbers of a array
    const sumArray = (arr: Array<number>) => {
        return arr.reduce((acumulator: number, value: number) => {
            return acumulator + value
        }, 0)
    }

    //<----------- PROCESSING----------->
    const firstMultiply: number[] = multMatrix(cnpjToTestFirstDV, numerals);

    const firstSum: number = sumArray(firstMultiply);
    let firstDV = firstSum % 11;
    (firstDV < 2 ? firstDV = 0 : firstDV = 11 - firstDV)


    const secondMultiply: number[] = multMatrix(cnpjToTestSecondDV, numerals2);
    const secondSum: number = sumArray(secondMultiply);

    let secondDV = secondSum % 11;

    (secondDV < 2 ? secondDV = 0 : secondDV = 11 - secondDV)

    const dvForTest: string[] = cnpj.slice(16).match(/\d/g);

    const conditional = parseInt(dvForTest[0]) === firstDV && parseInt(dvForTest[1]) === secondDV

    if (!conditional) {
        return false;
    }
    return true;
}