import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import {  getOtpTransfer } from '../../../services/transfers'


const useGetOtpTransfersMutation = () => {
    return useMutation(async () => await getOtpTransfer(), {
        onSuccess: async () => {
       
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useGetOtpTransfersMutation