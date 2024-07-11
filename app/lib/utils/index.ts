import * as tailwind from "@/app/lib/utils/tailwind";
import {useEffect, useState} from "react";

export {tailwind}

export const canUseDocument = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const useIsClient = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient;
}

/**
 * 通过gender字段获取gender文本
 */
export const getGenderStr=(gender:'male'|'female')=>{
    if(gender === 'male'){
        return '男';
    }else{
        return '女';
    }

}