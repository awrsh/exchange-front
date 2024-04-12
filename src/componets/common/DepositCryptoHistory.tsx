import { useEffect, useState } from "react";
import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import useGetTransactionCryptoQuery from "../../hook/query/transaction/useGetTransactionCryptoQuery"
import Table from "./Table"
import { useFormik } from "formik";
import Input from "./Input";
import { BsSearch } from "react-icons/bs";

const DepositCryptoHistory = ({ type }: { type: string }) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    const { isLoading, data, isSuccess } = useGetTransactionCryptoQuery()
    // @ts-ignore
    const sortedData = data?.objects.sort((a: any, b: any) => new Date(b.write_date) - new Date(a.write_date));

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
            option.amount.toLowerCase().includes(e.target.value.toLowerCase())
            ||
            option.tx_id.toLowerCase().includes(e.target.value.toLowerCase())
            ||
            option.factor_number.toLowerCase().includes(e.target.value.toLowerCase())
            ||
            option.wallet_address.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    useEffect(() => {
        if (isSuccess) {
            const newData = sortedData?.filter((option) => option.type === type)
            setFilteredData(newData)
        }
    }, [isSuccess])


    return (
        <div>
            <div className='absolute left-6 top-[5rem]'>
                <Input isOnChange value={formik.values.search} onChange={onChange} icon_left={<BsSearch size={20} className='text-gray-500' />} className='w-[300px]' formik={formik} name='search' placeholder='جستجوی ارز' />
            </div>
            <Table isLoaidng={isLoading} length={filteredData?.length} header={["ردیف", "اسم ارز", "تاریخ‌وزمان", "مبلغ(تومان)", "txid", "آدرس ولت", "وضعیت"]}  >
                {
                    filteredData?.filter((option:any) => option.type === type)?.map((crypto:any, idx:number) => (
                        <StyledTableRow key={idx}>
                            <StyledTableCell className="dark:!text-white" align="center"><span className="font-num">{idx + 1}</span></StyledTableCell>
                            <StyledTableCell width={200} align="center">
                                <div className="flex items-center  justify-center  gap-2">
                                    <img src={crypto.currency_id.image} className="w-8 h-8  rounded-full" />
                                    <p className="font-bold text-start w-[100px]">{crypto.currency_id.title}</p>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {/* @ts-ignore */}
                                {new Date(crypto.create_date).toLocaleDateString("fa-IR", options)
                                }
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <span className="font-num">{Number(crypto.currency_id.price_info_price).toLocaleString()}</span>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <span className="font-num">{crypto.tx_id}</span>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <span className="font-num">{crypto.wallet_address}</span>
                            </StyledTableCell>

                            <StyledTableCell className="dark:!text-white" align="center" >{crypto.status === "success" ? <span className="text-green-500 text-center font-bold">تکمیل شده</span> : crypto.status === "pending" ? <span className="text-yellow-500 text-center font-bold">در انتظار تائید</span> : crypto.status === "cancel" ? <span className="text-red-500 text-center font-bold">کنسل شده</span> : <span className="text-red-500 text-center font-bold">ناموفق</span>} </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </Table >
        </div>

    )
}

export default DepositCryptoHistory