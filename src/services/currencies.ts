import { routes } from "../helpers/api/routes";
import { getRoute } from "../helpers/utils/services";
import { Currency } from "../types/Currencies";
import client_bitpin from "./utils/client-bitpin";




export const listCurrencies = async () => {
    const url = getRoute({ route: routes.currencies });
    return await client_bitpin<Currency[]>({ url });
};
