import { useFormik } from 'formik';
import { StyledTableCell, StyledTableRow } from '../../helpers/utils/mui'
import useGetOrderQuery from '../../hook/query/order/useGetOrderQuery'
import Input from './Input';
import Table from './Table'
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
let options = { year: "numeric", month: "long", day: "numeric" };

const TransactionOrder = ({ type }: { type: string }) => {
    const { data, isLoading, isSuccess } = useGetOrderQuery();
    const [filteredData, setFilteredData] = useState<any>([]);
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        onSubmit: () => { }
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue("search", e.target.value);
        const filtered: any = data?.objects.filter((option) =>
            option.currency_id.title.toLowerCase().includes(e.target.value.toLowerCase()) || option.currency_id.title_fa.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    useEffect(() => {
        if (isSuccess) {
            setFilteredData(data.objects)
        }
    }, [isSuccess])

    return (
        <div>
            <div className='absolute left-6 top-[5rem]'>
                <Input isOnChange value={formik.values.search} onChange={onChange} icon_left={<BsSearch size={20} className='text-gray-500' />} className='w-[300px]' formik={formik} name='search' placeholder='جستجوی ارز' />
            </div>
            <div className='mt-12'>
                <Table isLoaidng={isLoading} length={data?.objects.length} header={["نوع", "نام ارز", "تاریخ ثبت", "تعداد ارز", "شماره فاکتور", "وضعیت"]} >
                    {
                        filteredData.filter((option: any) => option.type === type).map((row: any, idx: number) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell align='center'>
                                    {
                                        row.type === "sell" ? <span className='text-red-500  rounded-lg p-2 px-4 text-[13px]'>فروش</span> : <span className='text-green-600 rounded-lg p-2 px-4 text-[13px]'>خرید</span>
                                    }
                                </StyledTableCell>
                                <StyledTableCell width={200} align="center">
                                    <div className="flex items-center  justify-center  gap-2">
                                        <img src={row.currency_id.image} className="w-8 h-8  rounded-full" />
                                        <div>
                                            <p className="font-bold text-start w-[100px]">{row.currency_id.title}</p>
                                            <p className="font-xs text-[10px] text-start w-[100px]">{row.currency_id.title_fa}</p>

                                        </div>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align='center' className='dark:!text-white'>
                                    {
                                        // @ts-ignore
                                        new Date(row.create_date).toLocaleDateString("fa-IR", options)
                                    }
                                </StyledTableCell>
                                <StyledTableCell align='center' className='dark:!text-white'>
                                    {
                                        row?.amount
                                    }
                                </StyledTableCell>
                                <StyledTableCell align='center' className='dark:!text-white'>
                                    {
                                        row?.factor_number
                                    }
                                </StyledTableCell>
                                <StyledTableCell align='center'>
                                    {
                                        row?.status === "approve" ?
                                            <span className='bg-green-600 text-white text-[11px] rounded-lg px-3 py-2'>تائید شده</span> :
                                            row?.status === "pending" ? <span className='bg-yellow-600 text-white text'>در حال انتظار</span> :
                                                row?.status === "cancel" ? <span className='bg-red-600 text-white text'>کنسل شده</span> :
                                                    row?.status === "reject" ? <span className='bg-red-600 text-white text'>رد شده</span> :
                                                        null
                                    }
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </Table>
            </div>
        </div>
    )
}

export default TransactionOrder