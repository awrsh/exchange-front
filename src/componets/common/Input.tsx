import React from "react";
interface Props {
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    icon?: JSX.Element;
    placeholder?: string;
    type?: string;
    count?: string;
    subLabel?: string;
    className?: string;
    ltr?: boolean;
    formik?: any;
    name?: string;
    isOnChange?: boolean;
    icon_left?: JSX.Element;
    required?: boolean;
    inputdivClass?: string;
    disabled?: boolean;
    onClickComment?: () => void;
    isActive?: boolean | string | undefined;
    placeholderRtl?: boolean;
    min?: number;
    max?: number,
    isError?: boolean
}
const Input = ({
    label,
    icon,
    placeholder,
    onChange,
    isOnChange,
    value,
    type = "text",
    count,
    subLabel,
    className,
    ltr,
    formik,
    name,
    icon_left,
    required,
    inputdivClass,
    disabled,
    placeholderRtl = true,
    isError = true,
}: Props) => {


    return (
        <>
            <div className={`flex-1 ${className}`}>
                {label && (
                    <label className="pb-[4px] block font-medium text-[13px] text-[#3b3b3b]">
                        <span className="font-es-bold ml-1">{count}</span>
                        {label}:
                        {required && <span className="text-[#DF2040] text-sm">*</span>}
                    </label>
                )}
                <div className="flex items-center gap-3">
                    <div
                        className={`border-[1px] flex-1  border-[#e1e1e1]  overflow-hidden  h-[44px] bg-[#f5f5f5] gap-3 rounded-lg flex items-center ${disabled?"bg-gray-50":""} ${subLabel ? "pr-2" : "px-2"
                            } ${formik && formik?.touched[name!] && formik?.errors[name!] ? "border-red-500" : "border-gray_deep "
                            } ${inputdivClass}`}
                    >
                        {icon}
                        <input
                            type={type}
                            disabled={disabled}
                            name={name}

                            className={`bg-transparent w-full text-[12px] text-black font-num   outline-none placeholder:text-[#9e9e9e] ${placeholderRtl ? "placeholder:text-right" : "placeholder:text-left"} ${ltr ? "ltr" : ""
                                }`}
                            placeholder={placeholder}
                            value={isOnChange ? value : formik.values[name!]}
                            onChange={isOnChange ? onChange : (e) => formik.setFieldValue(name, (e.target.value))}
                            autoComplete="off"
                        />
                        {icon_left}
                        {subLabel && (
                            <p className="whitespace-nowrap bg-[#e1e1e1] h-full font-es-regular flex justify-center items-center w-[80px]">
                                {subLabel}
                            </p>
                        )}
                    </div>

                </div>
                {
                    isError &&
                    <span className="font-regular py-1 text-[10px] pr-1 block text-red-600">
                        {formik?.touched[name!] && formik?.errors[name!] ? formik?.errors[name!] : null}
                    </span>
                }
            </div>
        </>
    );
};

export default Input;
