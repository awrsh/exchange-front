import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { useNavigate, useParams } from 'react-router-dom'
import { verifyAccount } from '../../../services/auth';

const useVerifyAccountMutation = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  return useMutation(async (data:any) => await verifyAccount({...data,rule_id:Number(id)}),{
    onSuccess:(data)=>{
      if (data?.result === "error") {
        errorToast(data?.error?.message)
        return
      }else{
        successToast("اطلاعات شما با موفقیت ثبت شد")
        navigate("/verification")
      }
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useVerifyAccountMutation