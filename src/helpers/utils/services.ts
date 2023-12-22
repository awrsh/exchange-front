import { AxiosRequestConfig } from "axios";
import formatUnicorn from "format-unicorn/safe";
import { inDevEnvironment } from "../constants/env-variables";
import { IS_SERVER } from "../constants/constants";
import { GetRouteProps } from "../../types/services";
import { generateQueries } from "./queries";

export const logRequestedUrl = ({ baseURL, method, url }: AxiosRequestConfig) => {
    if (baseURL && inDevEnvironment) {
        const fullUrl = baseURL + url;
        const str = method?.toUpperCase() + " " + fullUrl;
        if (IS_SERVER) {
            console.log("\x1b[36m%s\x1b[0m", str);
        } else {
            console.log(`%c${str}`, "color: #16ffff");
        }
    }
};

export const generateFormData = (obj: object) => {
    const data = new FormData();
    Object.entries(obj).forEach(([key, value]) => {
        if (value) {
            data.append(key, value);
        }
    });
    return { data, headers: { "Content-Type": "multipart/form-data" } };
};

export const generateFormDataList = (obj: object[]) => {
    const data = new FormData();
    obj.map((item) =>
        Object.entries(item).forEach(([key, value]) => {
            data.append(key, value);
        })
    );
    return { data, headers: { "Content-Type": "multipart/form-data" } };
};

export const getRoute = ({ route, query, ...rest }: GetRouteProps) => {
    let url = route;

    if (Object.keys({ ...rest }).length) {
        url = formatUnicorn(route, { ...rest });
    }

    if (query) {
        const queries = generateQueries(query);
        url = url + queries;
    }

    return url;
};

// type SetCookieProps = Partial<{
//     [key: string]: string;
// }>;
