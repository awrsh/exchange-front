//gregorian calendar & locale
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { DateObject } from "react-multi-date-picker";

export const converDatePer = (date: string) => {
    if (date) {
        const date1 = new DateObject(date);
        const birth_date = date1.convert(persian, persian_en).format();
        return birth_date;
    } else {
        return "";
    }
};
export const converDateGre = (date: string, format?: string) => {
    const date1 = new DateObject({ calendar: persian, locale: persian_fa, date })
        .convert(gregorian, gregorian_en)
        .format(format ? format : "");
    return date1;
};
export const converTime = (date: string) => {
    const date1 = new DateObject(date);
    const birth_date = date1.convert(persian, persian_fa).format("HH:mm");
    return birth_date;
};
