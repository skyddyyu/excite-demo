"use client";
import React, {useState} from 'react';
import {cn} from "@/app/lib/utils/tailwind";
import {jumpHeight, jumpMeter, shortRun, longRun} from "@/app/data/checkUp";

// 体检项数组
const itemsArr = [
    '跳高',
    '跳远',
    '100米短跑',
    '1600米长跑',
]

const resultMap = {
    '跳高': jumpHeight,
    '跳远': jumpMeter,
    '100米短跑': shortRun,
    '1600米长跑': longRun,
}

const HistoryScorePanel = () => {
    const [curSelect, setCurSelect] = useState('跳高');

    return (
        <div className={'flex flex-col'}>
            {/* tab切换区域 */}
            <div className={'flex text-2xl gap-4 my-5'}>
                {
                    itemsArr.map((item, index) => {
                        return (
                            <div key={index} className={cn("flex items-center justify-center cursor-pointer pr-4", {
                                'border-r border-solid border-black': index !== itemsArr.length - 1,
                                'underline': item === curSelect,
                            })} onClick={() => {
                                setCurSelect(item);
                            }}>
                                <span>{item}</span>
                            </div>
                        );
                    })
                }
            </div>

            {/* 需要一个上border作为分割线 */}
            {/* 数据展示区域    */}
            <div className="panelMain flex-1 overflow-hidden">
                <div className="h-full grid grid-cols-3 grid-rows-4 text-3xl border-t-4 border-solid border-black p-7">
                    <div>
                        记录日期
                    </div>
                    <div>
                        时间
                    </div>
                    <div>
                        成绩
                    </div>
                    {
                        resultMap?.[curSelect]?.slice(0, 3).map((item: any, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <div>
                                        {item.date}
                                    </div>
                                    <div>
                                        {item.time}
                                    </div>
                                    <div>
                                        {item.score}
                                    </div>
                                </React.Fragment>

                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default HistoryScorePanel;