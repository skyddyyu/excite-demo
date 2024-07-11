import React from 'react';
import LatestItem from "@/app/components/LatestDataSection/LatestItem";
import {jumpHeight, jumpMeter, shortRun, longRun} from "@/app/data/checkUp"
import PanelWrapper from "@/app/components/common/PanelWrapper";


const LatestDataSection = () => {


    return (
        <PanelWrapper title={'最新数据'} className={'h-full grid grid-cols-2 grid-rows-2 gap-7'}>
            <LatestItem title={'跳高'} value={jumpHeight[jumpHeight.length - 1].score}/>
            <LatestItem title={'跳远'} value={jumpMeter[jumpMeter.length - 1].score}/>
            <LatestItem title={'100米短跑'} value={shortRun[shortRun.length - 1].score}/>
            <LatestItem title={'1600米长跑'} value={longRun[longRun.length - 1].score}/>
        </PanelWrapper>
    );
};

export default LatestDataSection;