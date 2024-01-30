import DatePickerLib from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { converDatePer } from "../../helpers/utils/convert";

interface Props {
    formik: any;
    name: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    isActive?: boolean;
    className?: string;
    timepicker?: boolean;
    format?: string;
}
const Datepicker = ({
    formik,
    name,
    label = "تاریخ تولد",
    disabled,
    required,
    className,
    timepicker,
    format,
}: Props) => {


    function handleChange(value: any) {
       const date = converDatePer(value)
        formik.setFieldValue(name, date);
    }
    return (
        <div className={className}>
            {label && (
                <label className="pb-[4px] block font-medium text-[13px] text-[#3b3b3b]">
                    {label}:
                    {required && <span className="text-[#DF2040] text-sm">*</span>}
                </label>
            )}
            <div className="flex items-center gap-3">
                <DatePickerLib
                    style={{
                        border: formik.touched[name!] && formik.errors[name!] && "1px solid #ef4444",
                    }}
                    plugins={timepicker ? [<TimePicker position="top" />] : []}
                    value={formik.values[name]}
                    onChange={handleChange}
                    calendar={persian}
                    locale={persian_fa}
                    format={format}
                    disabled={disabled}
                    fixMainPosition
                    placeholder="روز/ماه/سال"
                    shadow={false}
                    
                />
            </div>
            <span className="font-es-regular pt-2 text-[10px] pr-1 inline-block text-red-600">
                {formik.touched[name!] && formik.errors[name!] ? formik.errors[name!] : null}
            </span>
        </div>
    );
};

export default Datepicker;
