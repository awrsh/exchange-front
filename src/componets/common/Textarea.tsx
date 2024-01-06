import React from "react";
interface Props {
    label: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
    icon?: JSX.Element;
    placeholder?: string;
    count?: string;
    className?: string;
    formik: any;
    name?: string;
    isOnChange?: boolean;
    isIconMessage?: boolean;
    onClickComment?: () => void;
    disabled?: boolean;
    isActive?: any;
    showComment?: boolean;
}
const Textarea = ({
    label,
    value,
    onChange,
    isOnChange,
    name,
    formik,
    icon,
    placeholder,
    count,
    className,
    disabled,
}: Props) => {
    return (
        <div className={`${className ? className : ""}`}>
           {label && (
                    <label className="pb-[4px] block font-medium text-[13px] text-[#3b3b3b]">
                        <span className="font-es-bold ml-1">{count}</span>
                        {label}:
                        {/* {required && <span className="text-[#DF2040] text-sm">*</span>} */}
                    </label>
                )}
            <div className="flex items-start gap-3">
                <div
                    className={`border px-2 flex-1  bg-gray_light gap-3 rounded-lg flex items-center ${
                        formik && formik.touched[name!] && formik.errors[name!] ? "border-red-500" : "border-gray_deep"
                    }`}
                >
                    {icon}
                    <textarea
                        disabled={disabled}
                        rows={7}
                        name={name}
                        className="bg-transparent resize-none w-full p-2 font-es-medium placeholder:font-es-regular outline-none"
                        placeholder={placeholder}
                        value={isOnChange ? value : formik.values[name!]}
                        onChange={isOnChange ? onChange : (e) => formik.setFieldValue(name, e.target.value)}
                    />
                </div>
               
            </div>
            <span className="font-es-regular text-[10px] pr-1 inline-block text-red-600">
                {formik && formik.touched[name!] && formik.errors[name!] ? formik.errors[name!] : null}
            </span>
        </div>
    );
};

export default Textarea;
