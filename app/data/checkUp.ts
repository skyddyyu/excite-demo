interface ScoreItem {
    date: string,
    time: string,
    score: string,
}

// 跳高数据
const jumpHeight:ScoreItem[] = [
    {date: '2019-06-18', time: '15:34', score: '1.7m'},
    {date: '2019-06-10', time: '15:34', score: '1.5m'},
    {date: '2019-06-1', time: '15:34', score: '1.4m'},
    {date: '2019-05-17', time: '15:34', score: '1.6m'},
]

// 跳远数据
const jumpMeter:ScoreItem[] = [
    {date: '2024-06-18', time: '15:34', score: '2m'},
    {date: '2023-06-10', time: '15:34', score: '2.2m'},
    {date: '2022-06-1', time: '15:34', score: '2.1m'},
    {date: '2021-05-17', time: '15:34', score: '2.6m'},
]

// 100米短跑数据
const shortRun:ScoreItem[] = [
    {date: '2024-06-18', time: '15:34', score: '14.5s'},
    {date: '2023-06-10', time: '15:34', score: '14.2s'},
    {date: '2022-06-1', time: '15:34', score: '14.3s'},
    {date: '2021-05-17', time: '15:34', score: '13.2s'},
]


// 1600米长跑数据
const longRun:ScoreItem[] = [
    {date: '2024-06-18', time: '15:34', score: '2m'},
    {date: '2023-06-10', time: '15:34', score: '2.2m'},
    {date: '2022-06-1', time: '15:34', score: '2.1m'},
    {date: '2021-05-17', time: '15:34', score: '2.6m'},
]


export {jumpHeight, jumpMeter, shortRun, longRun}