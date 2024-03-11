import _axios from "axios";
import { mainUrl_bitpin } from "../../helpers/constants/env-variables";
import { logRequestedUrl } from "../../helpers/utils/services";

const headers = { "Content-Type": "application/json","Access-Control-Allow-Origin":"*" };

const axios_bitpin = _axios.create({
    headers,
    baseURL: mainUrl_bitpin,
});

axios_bitpin.interceptors.request.use(
    function (config) {
        logRequestedUrl(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios_bitpin;
