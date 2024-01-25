import { FormikProps } from "formik";
import { AiOutlineCloudUpload } from "react-icons/ai";

type Props = {
    label: string;
    formik: FormikProps<any>;
    name: string
}
const Upload = ({ label, formik, name }: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        if (e?.target?.files[0]) {
            formik.setFieldValue(name, e.target.files[0])
        }
    }
    return (
        <div>
            <label className="border border-dashed mt-3 h-32 overflow-hidden rounded-lg flex justify-center items-center" htmlFor='upload'>
                {
                    formik.values[name!] ? <img className="object-cover" src={URL.createObjectURL(formik.values[name!])}/>:
                        <div className="flex flex-col items-center gap-3">
                            <AiOutlineCloudUpload className="w-12 h-12 text-neutral-800" />
                            <p className="font-medium text-xs text-neutral-800">{label}</p>
                        </div>
                }
            </label>
            <input onChange={onChange} name={name} type="file" id='upload' className='absolute opacity-0 -z-10 w-0' />
        </div>
    )
}

export default Upload