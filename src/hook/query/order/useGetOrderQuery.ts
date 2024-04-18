import { useQuery } from 'react-query'
import {Order } from '../../../helpers/constants/query-keys'
import { getOrder } from '../../../services/order'

const useGetOrderQuery = () => {
  return useQuery([Order.ALL_ORDERS], async () => await getOrder(), {
    cacheTime:0,

  })
}

export default useGetOrderQuery