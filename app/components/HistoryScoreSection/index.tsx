import React from 'react';
import HistoryScorePanel from "@/app/components/HistoryScoreSection/HistoryScorePanel";

const HistoryScoreSection = () => {
    return (
        <div className={'border border-solid border-black rounded-[70px] py-5 px-12 bg-white flex flex-col'}>
            <h1 className="mb-5">最新数据</h1>
            <div className="flex-1 overflow-hidden ">
                <HistoryScorePanel/>
            </div>
        </div>
    );
};

export default HistoryScoreSection;