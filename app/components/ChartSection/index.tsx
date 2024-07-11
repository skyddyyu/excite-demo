import React, {useMemo} from 'react';
import ShowScoreChart from "@/app/components/ChartSection/ShowScoreChart";
import {jumpHeight, jumpMeter, shortRun, longRun} from "@/app/data/checkUp"

/**
 * 将成绩数组格式化为
 * {
 *   category:['时间日期a','时间日期b'],
 *   score:[],
 * }
 * @param arr
 */
function handleFormatArr(arr: any[]) {
    const category: string[] = [];
    const score: string[] = [];
    arr.forEach((item: any) => {
        category.push(item.date);
        score.push(item.score)
    })
    return {
        category,
        score
    }
}


const ChartSection = () => {

    const chartData = useMemo(() => {
        // 处理跳高
        const jumpHeightData = handleFormatArr(jumpHeight);
        // 处理跳远
        const jumpMeterData = handleFormatArr(jumpMeter);
        // 处理短跑
        const shortRunData = handleFormatArr(shortRun);
        // 处理长跑
        const longRunData = handleFormatArr(longRun);

        return {
            jumpHeightData,
            jumpMeterData,
            shortRunData,
            longRunData,
        }
    }, [jumpHeight,jumpMeter,shortRun,longRun])

    return (
        <div className={'grid grid-rows-2 gap-10 grid-cols-2'}>
            <ShowScoreChart data={chartData.jumpHeightData} title={'近十次跳高数据'} id={'showJumpHeight'} />
            <ShowScoreChart data={chartData.jumpMeterData} title={'近十次跳远数据'} id={'showJumpMeter'} />
            <ShowScoreChart data={chartData.shortRunData} title={'近十次短跑数据'} id={'showShortRun'} />
            <ShowScoreChart data={chartData.longRunData} title={'近十次长跑数据'} id={'showLongRun'} />
        </div>
    );
};

export default ChartSection;