import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { useParams } from 'react-router-dom'
import { verifyAccount } from '../../../services/auth';

const useVerifyAccountMutation = () => {
  const { id } = useParams();
  return useMutation(async (data:any) => await verifyAccount({...data,rule_id:Number(id)}),{
    onSuccess:(data)=>{
      if (data?.result === "error") {
        errorToast(data?.error?.description)
        return
      }else{
        successToast("اطلاعات شما با موفقیت ثبت شد")
      }
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useVerifyAccountMutation