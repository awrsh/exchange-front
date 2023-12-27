
interface Props {
    className?: string;
    formik: any;
    name: string;
    containerClass?: string;
    circleClass?: string;
    accept?: string;
    title?: string;
}
const CustomUploadImage = ({ className, formik, name, containerClass,accept,title }: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        if (e.target.files[0]) {
            formik.setFieldValue(name, e.target.files[0]);
        }
    };
    return (
        <div className={`flex flex-col border border-gray-200 rounded-xl overflow-hidden   gap-2 w-full ${className}`}>
            <div className="flex gap-5 !cursor-pointer w-full flex-1 ">
                <div className="w-full ">
                    <label
                        className={`h-[328px] rounded-lg !w-full overflow-hidden flex justify-center items-center bg-[#F8F6FF] ${containerClass}`}
                        htmlFor={name}
                    >
                        {/* {typeof formik.values[name!] === "string" ? formik.values[name!] : formik.values[name!]?.name} */}
                        {typeof formik.values[name!] === "string" ? (
                            <img src={formik.values[name!]} />
                        ) : formik.values[name!]?.name ? (
                            <img className="w-full h-full object-cover" src={URL.createObjectURL(formik.values[name!])} />
                        ) : (
                            <div className="flex flex-col items-center gap-5">
                                {/* <div
                                    className={`w-[112px] h-[112px] flex justify-center items-center bg-white rounded-full ${circleClass}`}
                                >
                                    <Upload_icon />
                                </div> */}
                                <p className="font-medium text-xs cursor-pointer">
                                    عکس <span className="text-int text-xs underline">{title}</span> خود را اپلود کنید
                                </p>
                            </div>
                        )}
                    </label>
                    <input accept={accept} onChange={onChange} className="absolute -z-50 w-0 opacity-0 overflow-hidden" type="file" name={name} id={name} />
                </div>
            </div>
        </div>
    );
};

export default CustomUploadImage;
