import { ReactNode, useContext } from "react";
import ReactSelect, { FormatOptionLabelMeta, GetOptionLabel } from "react-select";
import { themeContext } from "../../context/ThemeContextProvider";
interface Props {
    options: any[];
    formik: any;
    name: string;
    getOptionLabel?: GetOptionLabel<any> | undefined;
    getOptionValue?: GetOptionLabel<any> | undefined;
    label?: string;
    isLoading?: boolean;
    onChange?: (value: any) => void;
    isDisabled?: boolean;
    isMulti?: boolean;
    defaultValue?: any;
    onMenuScrollToBottom?: () => void;
    required?: boolean;
    placeholder?: string;
    backgroundColor?: string;
    className?: string;
    isSearchable?: boolean,
    formatOptionLabel?: ((data: any, formatOptionLabelMeta: FormatOptionLabelMeta<any>) => ReactNode) | undefined;
}
const Select = ({
    options,
    isMulti,
    defaultValue,
    formik,
    name,
    getOptionValue,
    isDisabled,
    getOptionLabel,
    label,
    isLoading,
    onChange,
    onMenuScrollToBottom,
    required,
    placeholder,
    backgroundColor = "#f5f5f5",
    className,
    isSearchable = false,
    formatOptionLabel
}: Props) => {
    const {theme} = useContext(themeContext)
    const styles = {
        control: (base: any, state: any) => ({
            ...base,
            border: state.isFocused ? 0 : formik.errors[name!]?.id ? "1px solid #ef4444" : "1px solid #eee",
            backgroundColor: theme === "dark"?"#CBD5E1": backgroundColor,
            height: isMulti ? "fit-content" : "46.58px",
            borderRadius: "8px",
            fontSize: "12px !important",
            fontFamily: "dana",
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            "&:hover": {
                border: state.isFocused ? 0 : 0,
            },
            options: (styles: any) => ({
                ...styles,
                fontSize: "12px !important",
            }),
        }),
    };
    return (
        <div className={`w-full ${className}`}>
            {
                label &&
                <label className="pb-[9px] block font-medium text-[13px] ">
                    {label}:
                    {required && <span className="text-[#DF2040] text-sm">*</span>}
                </label>
            }
            <ReactSelect
                defaultValue={defaultValue}
                isMulti={isMulti}
                value={formik.values[name]}
                isLoading={isLoading}
                placeholder={<span className="!text-gray-400 font-regular">{placeholder}</span>}
                styles={styles}
                options={options}
                onMenuScrollToBottom={onMenuScrollToBottom}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                formatOptionLabel={formatOptionLabel}
                onChange={onChange ? onChange : (value) => formik.setFieldValue(name, value)}
                name={name}
                isSearchable={isSearchable}
                noOptionsMessage={() => <span className="text-xs !font-medium">لیست خالی است</span>}
                isDisabled={isDisabled}
                menuPosition="fixed"
            />
            <span className="block font-artin-light mt-[1px] text-[11px] text-red-500 pr-1">
                {formik.errors[name!]?.id ? formik.errors[name!]?.id : null}
            </span>
        </div>
    );
};

export default Select;
