import { routes } from "../helpers/api/routes";
import { getRoute } from "../helpers/utils/services";
import {  ResponseGetAuthorityRuels } from "../types/Authority/ResponseGetAuthorityRuels";
import { AuthorityLevels } from "../types/Authority/ResponseGetAuthorityLevels";
import client from "./utils/client";




export const getAuthorityLevels = async () => {
    const url = getRoute({ route: routes.authority.levels });
    return await client<AuthorityLevels[]>({ url });
};
export const getAuthorityRuels = async (id:string) => {
    const url = getRoute({ route: `${routes.authority.ruels}/${id}` });
    return await client<ResponseGetAuthorityRuels>({ url });
};