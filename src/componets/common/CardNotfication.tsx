import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { FiBell } from 'react-icons/fi'
import { Notification } from '../../types/Notification'
import useUpdateNotificationMutation from '../../hook/mutation/notification/useUpdateNotificationMutation'

const CardNotfication = ({ notification }: { notification: Notification }) => {
    const { mutate } = useUpdateNotificationMutation()

    const onChange = (notification: Notification) => {
        if (notification.seen) return
        mutate({ notifications_ids: notification.id.toString() })
    }
    return (
        <Accordion onChange={()=>onChange(notification)} className="!shadow-none  !rounded-xl border group border-neutral-300 dark:!bg-slate-300">
            <AccordionSummary
             
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className="flex gap-2 items-center">
                    <span className={`!min-w-11 !min-h-11   bg-neutral-100 dark:bg-slate-400 transition-all duration-300 group-hover:text-white  flex justify-center items-center rounded-full ${notification.seen?"":"!bg-green-500 text-white"}`}>
                        <FiBell size={20} />
                    </span>
                    <div className="space-y-1">
                        <span className="text-[12px] font-num text-center block text-neutral-500">{new Date(notification.create_date).toLocaleDateString("fa-IR")}</span>
                        <p className="text-[12px] text-zinc-900 font-regular">{notification.title}</p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className="text-[13px] text-center text-zinc-900">{notification.content}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default CardNotfication