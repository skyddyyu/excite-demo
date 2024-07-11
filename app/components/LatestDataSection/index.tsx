import React from 'react';
import LatestItem from "@/app/components/LatestDataSection/LatestItem";
import {jumpHeight, jumpMeter, shortRun, longRun} from "@/app/data/checkUp"


const LatestDataSection = () => {


    return (
        <div className={'border border-solid border-black rounded-[70px] py-5 px-12 bg-white flex flex-col'}>
            <h1 className="mb-5">最新数据</h1>
            <div className="flex-1 overflow-hidden h-full grid grid-cols-2 grid-rows-2 gap-7 ">
                <LatestItem title={'跳高'} value={jumpMeter[jumpMeter.length - 1].score}/>
                <LatestItem title={'跳远'} value={jumpMeter[jumpMeter.length - 1].score}/>
                <LatestItem title={'100米短跑'} value={shortRun[shortRun.length - 1].score}/>
                <LatestItem title={'1600米长跑'} value={longRun[longRun.length - 1].score}/>
            </div>
        </div>
    );
};

export default LatestDataSection;