import { BsSearch, BsStar } from "react-icons/bs"
import { tabsCurrentPrice } from "../../helpers/utils/data"
import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import Table from "../common/Table"
import { Sparklines, SparklinesLine } from "react-sparklines"
import Input from "../common/Input"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import useGlobalStore from "../../stores/global-store"
import useAuthStore from "../../stores/user-store"
import useGetCuurencyListQuery from "../../hook/query/currency/useGetCuurencyListQuery"
import { Link } from "react-router-dom"
import { Currency } from "../../types/Currencies"

const ListCurrency = () => {
    const { data, isLoading } = useGetCuurencyListQuery()
    const [filteredData, setFilteredData] = useState<Currency[] | []>([]);
    const { toggleVerifyAuth } = useGlobalStore()
    const { user } = useAuthStore()
    const [select, setSelect] = useState(0)
    const formik = useFormik<any>({
        initialValues: {
            serach: ""
        },
        onSubmit: () => { }
    })


    useEffect(() => {
        if (data?.objects) {
            // @ts-ignore
            setFilteredData(data?.objects)
        }
    }, [data])

    const onClick = () => {
        if (user?.authentication_status === "level_0") {
            toggleVerifyAuth(true)
        }
    }



    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue("search", e.target.value)
        if (e.target.value.length === 0) {
            // @ts-ignore
            setFilteredData(data?.objects)
            return
        }
        const filtered: any = data?.objects.filter((crypto) =>
        (crypto.title.toLowerCase().includes(formik.values.search.toLowerCase()) ||
            crypto.title_fa.toLowerCase().includes(formik.values.search.toLowerCase()))
        );

        setFilteredData(filtered)
    }

    return (
        <>
            <div className="mt-5 sticky top-1 z-50 bg-white dark:bg-deep_dark rounded-xl px-3 shadow-sm py-2 flex items-center gap-5">
                <Input name="search" isOnChange onChange={onChange} icon_left={<BsSearch />} className="!max-w-[400px] mt-2" inputdivClass="bg-white" placeholder="جستجوی ارز" formik={formik} />
                <div className="flex-1 gap-4 flex justify-between items-center overflow-hidden">

                    {tabsCurrentPrice.map((tab, idx) => (
                        <button onClick={() => setSelect(idx)} className={` font-bold flex-1 text-xs h-11 rounded-xl transition-all duration-500 ${select === idx ? "bg-int text-white" : "bg-white dark:bg-block"}`} key={idx}>{tab}</button>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <Table isLoaidng={isLoading} header={["علاقه‌مندی", "نام ارز", "قیمت لحظه‌ای(دلار)", "قیمت لحظه‌ای(تومان)", "تغیرات (24 ساعت)", "نمودار قیمت", "عملیات"]}>
                    {
                        filteredData?.map((crypto, idx) => {
                            return <StyledTableRow key={idx}>
                                <StyledTableCell width={100} align="center">
                                    <BsStar className="mx-auto" size={17} />
                                </StyledTableCell>
                                <StyledTableCell width={200} align="center">
                                    <div className="flex items-center  justify-center  gap-2">
                                        <img src={crypto.image} className="w-8 h-8  rounded-full" />
                                        <p className="font-bold text-start w-[100px]">{crypto.title}</p>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-medium">$ {crypto?.price_info_usdt_price ? Number(crypto.price_info_usdt_price) : ""}</p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-num">{Number(crypto.price).toLocaleString()} <span className="text-[10px]">تومان</span></p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p className="font-num">{Number(crypto.price_info_change) >= 0 ? <span className="text-green-500">% {crypto.price_info_change}</span> : <span className="text-red-500 block [direction:ltr]">% {crypto.price_info_change}</span>}</p>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {/* @ts-ignore */}
                                    <Sparklines data={[]} limit={5} >
                                        <SparklinesLine color="blue" />
                                    </Sparklines>

                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex items-center justify-center gap-5">
                                        <Link to={"/buy"} onClick={onClick} className="text-int"> آسان </Link>
                                        <span className="text-gray-400">|</span>
                                        <Link to={"/exchange"} onClick={onClick} className="text-int">معامله</Link>
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        })
                    }
                </Table>
            </div>
        </>
    )
}

export default ListCurrency