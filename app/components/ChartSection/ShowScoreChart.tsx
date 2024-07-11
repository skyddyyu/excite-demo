"use client";
import React from 'react';
import * as echarts from 'echarts';
import {useUpdateEffect} from "ahooks"

interface ShowScoreData {
    category: string[],
    score: string[],
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

    useUpdateEffect(() => {
        const chartDom = document.getElementById(id);
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
    }, [data, title, id])

    // 111
    return (
        <div id={id}/>
    );
};

export default ShowScoreChart;