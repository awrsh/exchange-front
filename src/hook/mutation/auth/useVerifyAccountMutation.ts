import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { useParams } from 'react-router-dom'
import { verifyAccount } from '../../../services/auth';

const useVerifyAccountMutation = () => {
  const { id } = useParams();
  return useMutation(async (data:any) => await verifyAccount({...data,rule_id:Number(id)}),{
    onSuccess:(data)=>{
      if (data?.result === "error") {
        errorToast(data?.error?.description)
        return
      }
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useVerifyAccountMutation