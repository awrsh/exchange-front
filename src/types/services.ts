import { AxiosRequestConfig } from "axios";
import { Required } from "utility-types";

export type ConfigUrlRequired = Required<AxiosRequestConfig, "url">;

export type ClientOverload = {
    <D = any>(urlAndConfig: ConfigUrlRequired): Promise<D>;
    <D, F>(urlAndConfig: ConfigUrlRequired, formatter: (data: D) => F): Promise<F>;
};

export type QueryParams = {
    ids?: number[];
    page?: number;
    limit?: number;
    sort?: string;
    order?: "asc" | "desc" | string;
    q?: string;
    [key: string]: any;
};

export type GetRouteProps = {
    route: string;
    query?: QueryParams;
    [key: string]: any;
};

export type PageTranslationRoute =
    | "web_convertion_page"
    | "web_result_search_page"
    | "web_view_all_page"
    | "web_profile_by_id_page"
    | "web_list_page"
    | "web_dashboard_page"
    | "web_landing_page";
