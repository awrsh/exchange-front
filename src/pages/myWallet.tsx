import { useFormik } from "formik"
import Input from "../componets/common/Input"
import Layout from "../componets/common/Layout"
import Table from "../componets/common/Table"
import Inventory from "../componets/my-wallet/inventory"
import { cryptoList } from "../helpers/utils/data"
import { StyledTableCell, StyledTableRow } from "../helpers/utils/mui"
import { BsSearch } from "react-icons/bs"

const MyWallet = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })
    return (
        <Layout>
            <div className="pb-10 w-[95%] mx-auto">
                <h1 className="text-xl font-bold">کیف پول‌ها</h1>
                <div className="bg-white dark:bg-dark p-4 mt-7 rounded-xl">
                    <Inventory />
                    <Input icon_left={<BsSearch />} placeholder="نام ارز دیجیتال جستجو کنید" formik={formik} className="mt-5 w-[300px]" />
                    <div className="mt-4 pb-5">
                        <Table header={["نام رمز ارز", "موجودی رمز ارز", "مبلغ قابل برداشت", ""]}>
                            {
                                cryptoList.map((crypto, idx) => (
                                    <StyledTableRow className="style-table-row" key={idx}>
                                        <StyledTableCell width={200} align="center">
                                            <div className="flex items-center justify-start  gap-1">
                                                <img className="w-7 h-7 rounded-full" src={crypto.url} />
                                                <div>
                                                    <p className="font-bold text-[13px]">{crypto.nameFn}</p>
                                                    <p className="font-regular text-start">{crypto.symbol}</p>
                                                </div>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell className="!font-num !text-[14px]" align="center">
                                            <div className="flex flex-col items-center">
                                                <p className="flex items-center gap-1 text-zinc-900">
                                                    <span>{crypto.withdrawableAmount}</span>
                                                    <span className="text-[10px]">{crypto.nameFn}</span>
                                                </p>
                                                {
                                                    idx !== 0 &&
                                                    <p className="flex items-center gap-1 text-neutral-600">
                                                        <span>0</span>
                                                        <span className="text-[10px]">تومان</span>
                                                    </p>
                                                }
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell className="!font-num !text-[14px]" align="center">
                                            <div className="flex flex-col items-center">
                                                <p className="flex items-center gap-1 text-zinc-900">
                                                    <span>{crypto.withdrawableAmount}</span>
                                                    <span className="text-[10px]">{crypto.nameFn}</span>
                                                </p>
                                                {
                                                    idx !== 0 &&
                                                    <p className="flex items-center gap-1 text-neutral-600">
                                                        <span>0</span>
                                                        <span className="text-[10px]">تومان</span>
                                                    </p>
                                                }
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell className="space-x-2 ">
                                            <button className="text-white bg-green-600 px-3 py-2 rounded-lg border">برداشت</button>

                                            <button className="text-white bg-green-600 px-3 py-2 rounded-lg border !mx-2">واریز</button>
                                            {
                                                idx !== 0 &&
                                                <>
                                                    <button className="text-white bg-green-600 px-3 py-2 rounded-lg border">خرید آسان</button>
                                                    <button className="text-white bg-green-600 px-3 py-2 rounded-lg border">معامله</button>
                                                </>
                                            }

                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </Table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyWallet