import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { FiBell } from 'react-icons/fi'

const CardNotfication = () => {
    return (
        <Accordion className="!shadow-none  !rounded-xl border group border-neutral-300 dark:!bg-slate-300">
            <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className="flex gap-2 items-center">
                    <span className="!min-w-11 !min-h-11   bg-neutral-100 dark:bg-slate-400 transition-all duration-300 group-hover:text-white group-hover:bg-green-600 flex justify-center items-center rounded-full">
                        <FiBell size={20} />
                    </span>
                    <div className="space-y-1">
                        <span className="text-[12px] font-num text-center block text-neutral-500">1 روز پیش</span>
                        <p className="text-[12px] text-zinc-900 font-regular">مارکت و انتقال ارز MELI بطور موقت با اختلال مواجه شده است</p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className="text-[13px] text-center text-zinc-900">بدلیل نوسان ارز MELI و جلوگیری از | از بین رفتن دارایی کاربران | خرید و فروش و انتقال این ارز توسط مارکت مبدا بطور موفت از دسترس خارج شده است.</p>
                <p className="text-[13px] mt-4 text-zinc-900">بلافاصله پس از فعال شدن ارز از سمت مبدا | این ارز داخل صرافی کیف پول من فعال خواهد شد.</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default CardNotfication