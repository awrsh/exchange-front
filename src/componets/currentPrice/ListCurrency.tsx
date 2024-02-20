import { BsSearch, BsStar } from "react-icons/bs"
import { currenciesList1, tabsCurrentPrice } from "../../helpers/utils/data"
import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import Table from "../common/Table"
import { Sparklines, SparklinesLine } from "react-sparklines"
import Input from "../common/Input"
import { useState } from "react"
import { useFormik } from "formik"
import useGlobalStore from "../../stores/global-store"
import useAuthStore from "../../stores/user-store"

const ListCurrency = () => {
    const { toggleVerifyAuth } = useGlobalStore()
    const { user } = useAuthStore()
    const [select, setSelect] = useState(0)
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })

    const onClick = () => {
        if (user?.authentication_status === "level_0") {
            toggleVerifyAuth()
        }
    }
    return (
        <>
            <div className="mt-5 flex items-center gap-5">
                <Input icon_left={<BsSearch />} className="!max-w-[400px] mt-2" inputdivClass="bg-white" placeholder="جستجوی ارز" formik={formik} />
                <div className="flex-1 gap-4 flex justify-between items-center overflow-hidden">

                    {tabsCurrentPrice.map((tab, idx) => (
                        <button onClick={() => setSelect(idx)} className={` font-bold flex-1 text-xs h-11 rounded-xl transition-all duration-500 ${select === idx ? "bg-int text-white" : "bg-white dark:bg-slate-400"}`} key={idx}>{tab}</button>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <Table header={["علاقه‌مندی", "نام ارز", "قیمت لحضه‌ای(دلار)", "قیمت لحضه‌ای(تومان)", "تغیرات (24 ساعت)", "نمودار قیمت", "عملیات"]}>
                    {
                        currenciesList1.map((crypto, idx) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell width={100} align="center">
                                    <BsStar className="mx-auto" size={17} />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-bold">{crypto.name}</p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-num">${crypto.usdPrice.toLocaleString()}</p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-num">{crypto.tomanPrice.toLocaleString()} <span className="text-[10px]">تومان</span></p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-num">{Number(crypto.change24h) >= 0 ? <span className="text-green-500">%{crypto.change24h}</span> : <span className="text-red-500 block [direction:ltr]">%{crypto.change24h}</span>}</p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Sparklines data={crypto.chart} limit={5} >
                                        <SparklinesLine color="blue" />
                                    </Sparklines>

                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div>
                                        <button onClick={onClick} className="text-int">خرید و فروش</button>
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </Table>
            </div>
        </>
    )
}

export default ListCurrency