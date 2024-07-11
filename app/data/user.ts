interface User {
    id: number,
    name: string,
    gender: 'male' | 'female',
    height: number;
    weight: number;
    age: number,
}

export const users: Array<User> = [
    {
        id: 0,
        name:'王小明',
        gender: 'male',
        height: 170,
        weight: 65,
        age: 23,
    }
]