import { useFormik } from "formik"
import Select from "../common/Select"
import useAuthStore from "../../stores/user-store"
import Input from "../common/Input"
import Button from "../common/Button"
import VerifyInternalTransfer from "./VerifyInternalTransfer"
import { useState } from "react"
import * as Yup from "yup"
const InternalTransfer = () => {
  const [modal, setModal] = useState<any>({
    info: null,
    open: false
  })
  const { user } = useAuthStore()
  const formik = useFormik({
    initialValues: {
      amount: "",
      mobile: "",
      crypto: {
        currency_id: { title: "" },
        balance: ""
      }
    },
    validationSchema: Yup.object({
      amount: Yup.string().required("فیلد اجباری است"),
      mobile: Yup.string().required("فیلد اجباری است"),
    }),
    onSubmit: (values) => {
      formik.resetForm()
      setModal({
        info: {
          ...values,
          crypto: values.crypto.currency_id
        },
        open: true
      })
    }
  })
  const formatOptionLabel = ({ currency_id, balance }: any) => {
    return <div className="flex justify-between items-center">
      <div className='flex items-center gap-2'>
        {
          currency_id?.image &&
          <img className='w-6 h-6 rounded-full' src={currency_id?.image} />
        }
        <div className='flex items-center gap-2'>
          <span className='text-xs font-bold'>{currency_id?.title}</span>
          <span className='text-[11px] pt-1 font-num'>{balance ? `${balance} عدد` : ""} </span>
        </div>
      </div>
      <p className="font-num text-gray-900">{balance ? Number(balance * currency_id?.price).toLocaleString() : ""} <span className="text-[9px]">موجودی</span></p>
    </div>
  }

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formik?.values?.crypto?.currency_id) {
      if (Number(e.target.value) < 0) return
      if (e.target.value > formik?.values?.crypto?.balance) return
      formik.setFieldValue("amount", e.target.value)
    }
  }

  // @ts-ignore
  const total = user?.wallets.find((crypto) => crypto.currency_id.code === formik?.values.crypto?.currency_id.code)
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mt-5">
        <Select
          getOptionLabel={(option) => option.currency_id?.title}
          getOptionValue={(option) => option.currency_id?.title}
          formatOptionLabel={formatOptionLabel}
          formik={formik}
          label="انتخاب ارز"
          name="crypto"
          options={user?.wallets.filter((option) => option.currency_id.code !== "IRT")!}
          isSearchable
        />
        <Input
          isOnChange
          value={formik.values.amount}
          onChange={onChangeAmount}
          disabled={!formik.values.crypto}
          className="!mt-3"
          formik={formik}
          label={`میزان انتقال (${formik.values.crypto?.currency_id?.title ?? ""})`} name="amount" />
        <Input
          className='mt-1'
          name='mobile'
          label='شماره موبایل'
          formik={formik}
          type="tel"
          disabled={!formik.values.crypto}
        />

        <div className="space-y-4 bg-[#fff3d5] p-4 rounded-lg !mt-6">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[14px] text-gray-900">میزان برداشت</p>
            <p className="text-[12px] text-gray-900">{formik.values?.amount} {formik.values.crypto?.currency_id?.title}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-[14px] text-gray-900">کارمزد</p>
            <p className="text-[12px] text-gray-900">0 BTC</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-[14px] text-gray-900">دریافتی شما</p>
            <p className="text-[12px] text-gray-900">0 BTC</p>
          </div>
        </div>
        <Button type="submit" containerClass="!mt-16 !bg-int" name="انتقال" />
      </form>
      {
        modal.open ?
          <VerifyInternalTransfer modal={modal} setModal={setModal} />
          : null
      }
    </div>
  )
}

export default InternalTransfer