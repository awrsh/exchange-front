import { FaCheck } from "react-icons/fa"
import useGetAuthorityRuels from "../../hook/query/authority/useGetAuthorityFormById"
import Input from "../common/Input"
import { useFormik } from "formik"
import Upload from "../common/Upload"
import Button from "../common/Button"
import useUpdateUserMutation from "../../hook/mutation/auth/useUpdateUserMutation"
import { useParams } from "react-router-dom"

const Form = () => {

  const {mutate,isLoading} = useUpdateUserMutation()
  const { data } = useGetAuthorityRuels()
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      mutate(values)
     }
  })
  return (
    <div className='w-[90%] mx-auto h-screen flex justify-center items-center'>
      <div className="border max-w-[500px] min-w-[500px] p-3 rounded-lg bg-white">
        {data?.objects?.map((item, idx) => (
          <div key={idx}>
            <div className='flex items-center gap-3'>
              <div className='w-5 h-5 flex justify-center items-center border border-[#23DCCE] rounded-full'>
                <FaCheck className="w-2 h-2 text-[#23DCCE]" />
              </div>
              <p
                key={idx}
                className="text-[#a3a5a8] text-[13px] pt-[10px] pb-[10px] flex items-start gap-2"
              >

                {item.title}
              </p>
            </div>
            {
              item.sequence !== 1 &&
            <div className="flex flex-col gap-[2px]">
              {
                item.options.map((option, idx) => {
                  if (option.field_type === "text") return <Input formik={formik} name={option.field_key} label={option.title} key={idx} />
                  if (option.field_type === "image") return <Upload name={option.field_key} formik={formik} label={option.title} key={idx} />
                  return (
                    <p></p>
                  )
                })
              }
              <Button isLoading={isLoading} onClick={formik.handleSubmit} containerClass="!mt-10" name="ثبت اطلاعات" />
            </div>
            }
          </div>

        ))}
      </div>
    </div>
  )
}

export default Form