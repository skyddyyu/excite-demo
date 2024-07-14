"use client";
import React from 'react';
import {cn} from "@/app/lib/utils/tailwind";
import {jumpHeight, jumpMeter, longRun, shortRun} from "@/app/data/checkUp";

// 体检项数组
const itemsArr = [
    '跳高',
    '跳远',
    '100米短跑',
    '1600米长跑',
] as const;

// 定义一个类型别名，它是数组元素类型的联合
export type ItemsType = typeof itemsArr[number];

export const resultMap = {
    '跳高': jumpHeight,
    '跳远': jumpMeter,
    '100米短跑': shortRun,
    '1600米长跑': longRun,
}

const HistoryScorePanel = ({curSelect, setCurSelect}: {
    curSelect: ItemsType,
    setCurSelect: (val: ItemsType) => void
}) => {


    return (
        <div className={'h-full flex flex-col'}>
            {/* tab切换区域 */}
            <div className={'text-md flex gap-2 my-3 sm:text-2xl sm:gap-4  sm:my-5'}>
                {
                    itemsArr.map((item, index) => {
                        return (
                            <div key={index}
                                 className={cn("flex items-center justify-center cursor-pointer pr-1 sm:pr-4", {
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
                <div
                    className="h-full grid grid-cols-3 grid-rows-4 text-[15px] text-center border-t-4 border-solid border-black p-1 sm:p-7 sm:text-3xl">
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
                        resultMap?.[curSelect]?.slice(0, 3)?.map((item: any, index: number) => {
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