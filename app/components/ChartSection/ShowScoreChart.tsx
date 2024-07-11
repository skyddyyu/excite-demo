"use client";
import React from 'react';
import * as echarts from 'echarts';
import {useDeepCompareEffect} from "ahooks"

interface ShowScoreData {
    category: string[],
    score: number[],
}

// @ts-ignore
const ShowScoreChart = ({title, data, id}: { title: string, data: ShowScoreData, id: string }) => {

    const option = {
        xAxis: {
            type: 'category',
            data: data.category,
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data.score,
                type: 'line'
            }
        ],
        title: {
            text: title,
        }
    };

    useDeepCompareEffect(() => {
        const chartDom = document.getElementById(id);
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
    }, [data, title, id])

    return (
        <div className={'h-[220px] sm:h-auto bg-white'} id={id}/>
    );
};

export default ShowScoreChart;