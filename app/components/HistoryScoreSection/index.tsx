import React from 'react';
import HistoryScorePanel from "@/app/components/HistoryScoreSection/HistoryScorePanel";
import PanelWrapper from "@/app/components/common/PanelWrapper";

const HistoryScoreSection = () => {
    return (
        <PanelWrapper title={'最新数据'}>
            <HistoryScorePanel/>
        </PanelWrapper>
    );
};

export default HistoryScoreSection;