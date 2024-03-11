import { AxiosResponse } from "axios";
import { ClientOverload, ConfigUrlRequired } from "../../types/services";
import axios_bitpin from "./axios-bitpin";

const client_bitpin: ClientOverload = async <D, F>(
    { url, ...config }: ConfigUrlRequired,
    formatter?: (data: D, response: AxiosResponse<D, any>) => F
) => {
    const response = await axios_bitpin.request<D>({
        url: encodeURI(url),
        ...config,
    });

    return typeof formatter === "undefined" ? response.data : formatter(response.data, response);
};

export default client_bitpin;
