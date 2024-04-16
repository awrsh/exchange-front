import useGetAuthorityRuels from "../../hook/query/authority/useGetAuthorityFormById"
import Input from "../common/Input"
import { useFormik } from "formik"
import Upload from "../common/Upload"
import Button from "../common/Button"
import useVerifyAccountMutation from "../../hook/mutation/auth/useVerifyAccountMutation"
import Datepicker from "../common/Datepicker"
import CheckStatusUserVerifyAccount from "../../hoc/CheckStatusUser"
import VerifyTable from "../../componets/verificationTable/VerifyTable";


const Form = () => {
  const { mutate, isLoading } = useVerifyAccountMutation()
  const { data } = useGetAuthorityRuels()

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      mutate({ ...values })
    }
  })
  return (
    <div className='w-[90%] mx-auto h-screen flex flex-col justify-center items-center'>
      <div className="border max-w-[500px] min-w-[500px] p-3 rounded-lg bg-white">
        <h1 className="text-center py-3 font-bold">{data?.object.title}</h1>
        <div>
          {data?.object?.options.map((option, idx) => {
            if (option.field_key === "birthdate") return <Datepicker format="YYYY-MM-DD" name={option.field_key} formik={formik} label={option.title} key={idx} />
            if (option.field_type === "text") return <Input formik={formik} name={option.field_key} label={option.title} key={idx} />
            if (option.field_type === "image") return <Upload name={option.field_key} formik={formik} label={option.title} key={idx} />
            return null
          })}
        </div>
        <span className="gap-1 flex items-center font-medium text-[13px] ">
          <span className="text-red-500">*</span>
          کد ملی خود را جهت احراز هویت وارد کنید
        </span>
        <Button isLoading={isLoading} onClick={formik.handleSubmit} containerClass="!mt-10 !bg-int" name="ثبت اطلاعات" />
      </div>
      <div className="w-full">
        <VerifyTable />
      </div>
    </div>
  )
}

export default CheckStatusUserVerifyAccount()(Form)