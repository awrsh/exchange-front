import { useMutation, useQueryClient } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { createTickets } from '../../../services/ticket'

const useCreateTicketMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(async (data: any) => await createTickets(data), {
        onSuccess: () => {
            queryClient.refetchQueries({queryKey:"tickets"})
            successToast("با موفقیت ثبت شد")
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useCreateTicketMutation