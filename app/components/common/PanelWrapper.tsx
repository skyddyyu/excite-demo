import React from 'react';

const PanelWrapper = ({title, children, className = ''}: {
    title: string;
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div className={'border border-solid border-black rounded-[70px] py-4 px-9 bg-white flex flex-col sm:py-5 sm:px-12'}>
            <h1 className="mb-5">{title}</h1>
            <div className={`flex-1 overflow-hidden ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default PanelWrapper;