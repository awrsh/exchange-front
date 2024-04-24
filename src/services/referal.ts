import { getRoute } from "../helpers/utils/services";
import client from "./utils/client";



export const getReferal = async () => {
    const url = getRoute({ route: "/referrals/" });
    return await client<{objects:any[]}>({ url });
};



