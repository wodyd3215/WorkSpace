//  배열
let numArr: number[] = [10, 20, 30];

let strArr1: string[] = ["my", "name", "is", "jaeyong"];

let strArr2: Array<string> = ["my", "name", "is", "jaeyong"];

// 배열에 들어가는 타입이 두 가지 이상이다.
let multiArr: (string | number)[] = [10, "jaeyong", 20];

// 튜플
let tup1: [boolean, string, number] = [true, "two", 30];

// 객체
// let user = {
//     name: "jaeyong",
//     age: 20,
//     address: "경기도 하남시",
// }

let user: {
    name: string,
    age: number,
    address?: string, // 선택적 속성이다. ?: 없을 수도 있음을 나타낸다.
} = {
    name: "jaeyong",
    age: 20,
    // address: "경기도 하남시",
}

let math: {
    readonly pi: number //읽기만 가능(변경불가)
} = {
    pi: 3.14
}

// math.pi = 4;