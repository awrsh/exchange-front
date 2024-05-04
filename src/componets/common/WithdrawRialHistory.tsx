import { useEffect, useState } from "react"
import { formatCardNumber } from "../../helpers/utils/fun"
import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import useWithdrawRialPaymentHistory from "../../hook/query/idp/useWithdrawRialPaymentHistory"
import Table from "./Table"
import { useFormik } from "formik"
import Input from "./Input"
import { BsSearch } from "react-icons/bs"

const WithdrawRialHistory = () => {
    const { isLoading, data, isSuccess } = useWithdrawRialPaymentHistory()
    // @ts-ignore
    const sortedData = data?.object.sort((a: any, b: any) => new Date(b.write_date) - new Date(a.write_date));
    const [filteredData, setFilteredData] = useState<any>([]);
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        onSubmit: () => { }
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue("search", e.target.value);
        const filtered: any = data?.object.filter((option) =>
            option.card_number.toLowerCase().includes(e.target.value.toLowerCase())
            ||
            option.amount.toLowerCase().includes(e.target.value.toLowerCase())
            ||
            option.factor_number.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    useEffect(() => {
        if (isSuccess) {
            setFilteredData(data.object)
        }
    }, [isSuccess])


    return (
        <div>
            <div className='absolute left-6 top-[5rem]'>
                <Input isOnChange value={formik.values.search} onChange={onChange} icon_left={<BsSearch size={20} className='text-gray-500' />} className='w-[300px]' formik={formik} name='search' placeholder='جستجوی ارز' />
            </div>

            <Table isLoaidng={isLoading} length={data?.object?.length} header={["ردیف", "نوع", "تاریخ‌وزمان", "مبلغ(تومان)", "شناسه تراکنش", "کارت پرداختی", "وضعیت"]}  >
                {
                    filteredData?.map((crypto: any, idx: number) => (
                        <StyledTableRow key={idx}>
                            <StyledTableCell className="dark:!text-white" align="center"><span className="font-num">{idx + 1}</span></StyledTableCell>
                            <StyledTableCell className="dark:!text-white" align="center">واریز</StyledTableCell>
                            <StyledTableCell className="dark:!text-white" align="center">{new Date(crypto.write_date).toLocaleString("fa-IR")}</StyledTableCell>
                            <StyledTableCell align="center" className="!font-num dark:!text-white">{Number(crypto.amount).toLocaleString()} <span className="text-[10px]">تومان</span></StyledTableCell>
                            <StyledTableCell align="center" className="!font-num dark:!text-white">{crypto.factor_number}</StyledTableCell>
                            <StyledTableCell align="center" className="!font-num dark:!text-white">{crypto?.card_number?formatCardNumber(crypto?.card_number):""}</StyledTableCell>
                            <StyledTableCell className="dark:!text-white" align="center" >{crypto.status === "success" ? <span className="text-green-500 font-bold">تکمیل شده</span> : crypto.status === "pending" ? <span className="text-yellow-500 font-bold">در انتظار پرداخت</span> : crypto.status === "cancel" ? <span className="text-red-500 font-bold">کنسل شده</span> : <span className="text-red-500 font-bold">ناموفق</span>} </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </Table>

        </div>

    )
}

export default WithdrawRialHistory