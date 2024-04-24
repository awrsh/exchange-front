import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { PayloadTransfers } from '../../../types/Transfers'
import { addTransfers } from '../../../services/transfers'
import { getUser } from '../../../services/auth'
import useAuthStore from '../../../stores/user-store'


const useTransfersMutation = () => {
    const {setUser} = useAuthStore()
    return useMutation(async (data: PayloadTransfers) => await addTransfers(data), {
        onSuccess: async () => {
          const user = await getUser()
           setUser({user:user.object})
            successToast("انتقال با موفقیت انجام شد")
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useTransfersMutation