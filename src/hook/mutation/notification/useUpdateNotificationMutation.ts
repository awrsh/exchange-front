import { useMutation, useQueryClient } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { updateNotification } from '../../../services/notification'

const useUpdateNotificationMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(async (data:any) => await updateNotification(data),{
    
    onSuccess:()=>{
      queryClient.refetchQueries({queryKey:"notifications"})
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useUpdateNotificationMutation