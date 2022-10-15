import { TTranslate } from '@/Types/TTranslate';
import textEs from './es';
import textEn from './en';

const getIndexWord = (lang: TTranslate, word: string) =>{
    return Object.keys(lang).indexOf(word);
}
export const translate = (t:string) => {
    const lang = (window.navigator.language || navigator?.language).split('-')[0];
    if(lang === 'es'){
        const indexWord = getIndexWord(textEs, t);
        if(indexWord === -1) return t;
        return Object.values(textEs)[indexWord];
    }
    else{
        const indexWord = getIndexWord(textEn, t);
        if(indexWord === -1) return t;
        return Object.values(textEn)[indexWord];
    }
}