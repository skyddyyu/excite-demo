import React from 'react';
import Image from 'next/image';
import profileImg from "@/public/assets/img/profile.png"
import {users} from "@/app/data/user"

// 由于没有多用户 先默认取第一个
const user = users[0];

const UserProfileSection = () => {
    return (
        <div className={'border border-solid border-black rounded-[70px] py-5 px-12 bg-white'}>
            <h1 className="mb-5">基本資料</h1>
            <div className="flex gap-2">
                <Image src={profileImg} width={250} alt={'profile image'}/>
                <div className="text-2xl flex flex-col justify-between">
                    <div>姓名：{user.name}</div>
                    <div>性别：{user.age}</div>
                    <div>身高：{user.height}</div>
                    <div>体重：{user.weight}</div>
                </div>
            </div>
        </div>
    );
};


export default UserProfileSection;