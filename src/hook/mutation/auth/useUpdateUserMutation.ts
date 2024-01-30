import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import {  updateUser } from '../../../services/auth'
import { useParams } from 'react-router-dom'

const useUpdateUserMutation = () => {
  const { id } = useParams();
  return useMutation(async (data:any) => await updateUser(data,Number(id)),{
    onSuccess:()=>{
     
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useUpdateUserMutation