import React from 'react';

const PanelWrapper = ({title, children, className = '',leftSection}: {
    title: string;
    children: React.ReactNode,
    className?: string
    leftSection?: React.ReactNode,
}) => {
    return (
        <div
            className={'border border-solid border-black rounded-[70px] py-4 px-9 bg-white flex flex-col sm:py-5 sm:px-12'}>
            <div className={'flex justify-between'}>
                <h1 className="mb-5">{title}</h1>
                {leftSection}
            </div>
            <div className={`flex-1 overflow-hidden ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default PanelWrapper;