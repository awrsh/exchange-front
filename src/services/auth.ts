import { routes } from "../helpers/api/routes";
import { getRoute } from "../helpers/utils/services";
import client from "./utils/client";


export const getUser = async () => {
    const url = getRoute({ route: routes.auth.me });
    return await client<any>({ url });
};