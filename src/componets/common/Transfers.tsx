import { useFormik } from 'formik';
import { StyledTableCell, StyledTableRow } from '../../helpers/utils/mui'
import Input from './Input';
import Table from './Table'
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import useGetTransfersQuery from '../../hook/query/transfers/useGetTransfersQuery';
let options = { year: "numeric", month: "long", day: "numeric" };

const Transfers = ({ type }: { type: string }) => {
    const { data, isLoading, isSuccess } = useGetTransfersQuery();
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
                <Table isLoaidng={isLoading} length={data?.objects.length} header={["نام ارز", "تاریخ ثبت", "تعداد ارز", "شماره موبایل", "وضعیت"]} >
                    {
                        filteredData.map((row: any, idx: number) => (
                            <StyledTableRow key={idx}>

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
                                <StyledTableCell align='center' className='dark:!text-white '>
                                    <span className='!font-num'>{row.amount}</span>
                                </StyledTableCell>
                                <StyledTableCell align='center' className='dark:!text-white'>
                                    <span className='!font-num'>{row.destination_mobile}</span>
                                </StyledTableCell>
                                <StyledTableCell align='center'>
                                    {
                                        row.successful ? <span className='text-green-500'>موفق</span> : <span className='text-green-500'>ناموفق</span>
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

export default Transfers