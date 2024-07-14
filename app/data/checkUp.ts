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
    {date: '2024-02-18', time: '15:34', score: '2m'},
    {date: '2023-09-10', time: '15:34', score: '2.2m'},
    {date: '2022-07-01', time: '15:34', score: '2.1m'},
    {date: '2021-05-17', time: '15:34', score: '2.6m'},
]

// 100米短跑数据
const shortRun:ScoreItem[] = [
    {date: '2024-06-18', time: '15:34', score: '14.5s'},
    {date: '2023-01-10', time: '15:34', score: '14.2s'},
    {date: '2023-02-02', time: '15:34', score: '14.3s'},
    {date: '2021-05-17', time: '15:34', score: '13.2s'},
]


// 1600米长跑数据
const longRun:ScoreItem[] = [
    {date: '2024-06-11', time: '15:34', score: '21min'},
    {date: '2023-05-09', time: '15:34', score: '18.2min'},
    {date: '2022-04-03', time: '15:34', score: '17.3min'},
    {date: '2021-03-16', time: '15:34', score: '21.6min'},
]


export {jumpHeight, jumpMeter, shortRun, longRun}