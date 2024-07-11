import React from 'react';

interface LatestItemProps {
    title: string;
    value: string;
}

const LatestItem = ({title,value}:LatestItemProps) => {
    console.log('sssssss: ',title,value);
    return (
        <div
            className={'bg-[rgb(237,_237,_237)] border border-black border-solid rounded-xl p-3'}>
            <div className="text-2xl">{title}</div>
            <div className='flex justify-center items-center text-6xl'>
                {value}
            </div>
        </div>
    );
};

export default LatestItem;