import { getRoute } from "../helpers/utils/services";
import { ResponseNotifications } from "../types/Notification/ResponseNotifications";
import client from "./utils/client";

export const getNotfications = async () => {
    const url = getRoute({ route: "/notifications/" });
    return await client<ResponseNotifications>({ url });
};

export const updateNotification = async (data:{notifications_ids:string}) => {
    const url = getRoute({ route: "/notifications/update-seen/" });
    return await client<ResponseNotifications>({ url,method:"PATCH",data });
};