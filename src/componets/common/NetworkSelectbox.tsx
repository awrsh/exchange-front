import Select from './Select'
import useGetNetworkQuery from '../../hook/query/currency/useGetNetworkQuery'
type Props = {
    formik: any
}
const NetworkSelectbox = ({ formik }: Props) => {
    const { isLoading, data } = useGetNetworkQuery()
    const formatOptionLabel = ({ title_fa, code }: any) => {
        return <div className='flex items-center gap-2'>
            <span className='text-xs font-bold'>{title_fa}</span>
            <span className='text-[9px] font-medium'>{code}</span>
        </div>
    }
    return (
        <Select
            className='mt-3'
            isLoading={isLoading}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.title_fa}
            formatOptionLabel={formatOptionLabel}
            formik={formik}
            name='network'
            options={data?.objects!}
            label='نوع شبکه'
        />
    )
}

export default NetworkSelectbox