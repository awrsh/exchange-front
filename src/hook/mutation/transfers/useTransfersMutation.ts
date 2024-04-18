import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { PayloadTransfers } from '../../../types/Transfers'
import { addTransfers } from '../../../services/transfers'


const useTransfersMutation = () => {
    return useMutation(async (data: PayloadTransfers) => await addTransfers(data), {
        onSuccess: async () => {
            successToast("انتقال با موفقیت انجام شد")
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useTransfersMutation