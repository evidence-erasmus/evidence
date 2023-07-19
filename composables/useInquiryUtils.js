export const useInquiryUtils = () => {
    // const {tm, rt} = useI18n();
    const tmToObject = (tm) => {
        // const tm = tm(key);
        const myArr = [];
        tm.forEach(element => {
            let obj = {"name":element.name.body.static, "url":element.url.body.static}
            myArr.push(obj);
        });
        return myArr;
    }
    return {
        tmToObject
    };
}

