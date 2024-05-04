import {  CircularProgress } from "@mui/material"
import useGetAllNotification from "../../hook/query/notification/useGetAllNotification";

import CardNotfication from "../common/CardNotfication";

const NationwideAnnouncements = () => {
    const { isLoading, data } = useGetAllNotification()

    return (
        <div className="bg-white bg-dark flex overflow-auto flex-col rounded-xl p-3 h-[500px]">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3"> اطلاعیه های سراسری</p>
            <div className="mt-5">
                {
                    isLoading ? <CircularProgress /> :
                        <div className="flex flex-col gap-3 ">
                            {
                                data?.objects.map((notification, idx) => (
                                   <CardNotfication key={idx} notification={notification}/>
                                ))
                            }

                        </div>
                }
            </div>
        </div>
    )
}

export default NationwideAnnouncements