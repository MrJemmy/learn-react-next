let someValue1: unknown = 10;
console.log(someValue1)

let strLength1: number = (someValue1 as string).length;

console.log(strLength1)


interface IapiData<T> {
    user: string,
    page: number,
    data: string[],
    extra?: T[]
}

let apiData : IapiData<string> = {
    user: "jaimin",
    page: 3,
    data: ["mrjemmy", "jaimin", "jigo"],
    extra: ["asd", "test", "gray"]
}


interface Iapi2Data<T extends object> {
    user: string,
    page: number,
    data: string[],
    extra?: T[]
}

let api2Data : Iapi2Data<{id: number, count: number}> = {
    user: "jaimin",
    page: 3,
    data: ["mrjemmy", "jaimin", "jigo"],
    extra: [{id: 1, count: 20}, {id: 2, count: 90}]
}