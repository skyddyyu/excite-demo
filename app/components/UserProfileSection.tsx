"use client";
import React from 'react';
import Image from 'next/image';
import profileImg from "@/public/assets/img/profile.png"
import {users} from "@/app/data/user"
import PanelWrapper from "@/app/components/common/PanelWrapper";

// 由于没有多用户 先默认取第一个
const user = users[0];

const UserProfileSection = () => {
    return (
        <PanelWrapper title={'基本资料'} className={'flex gap-2'}>
            <div className={'w-70px sm:w-[250px] relative'}>
                <Image src={profileImg} fill alt={'profile image'}/>
            </div>
            <div className="text-md sm:text-2xl flex flex-col justify-between">
                <div>姓名：{user.name}</div>
                <div>性别：{user.age}</div>
                <div>身高：{user.height}</div>
                <div>体重：{user.weight}</div>
            </div>
        </PanelWrapper>
    );
};


export default UserProfileSection;