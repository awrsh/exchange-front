import { useFormik } from "formik"
import Input from "../componets/common/Input"
import Layout from "../componets/common/Layout"
import CardInfomationCurrentPrice from "../componets/currentPrice/CardInfomationCurrentPrice"
import { currenciesList1, informationCurrentPrice, tabsCurrentPrice } from "../helpers/utils/data"
import { BsSearch, BsStar } from "react-icons/bs"
import { useState } from "react"
import Table from "../componets/common/Table"
import { Sparklines, SparklinesLine } from 'react-sparklines';

import { StyledTableCell, StyledTableRow } from "../helpers/utils/mui"
const CurrentPrice = () => {
  const [select, setSelect] = useState(0)
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => { }
  })
  return (
    <Layout>
      <div className="w-[95%] mx-auto">
        <h1 className="text-xl font-bold">قیمت ارز های دیجیتال</h1>
        <div className="mt-7 flex justify-between items-end  gap-4 ">

          {
            informationCurrentPrice.map((crypto, idx) => (
              <CardInfomationCurrentPrice key={idx} crypto={crypto} />
            ))
          }
        </div>
        <div className="mt-5 flex items-center gap-5">
          <Input icon_left={<BsSearch />} className="!max-w-[400px] mt-2" inputdivClass="bg-white" placeholder="جستجوی ارز" formik={formik} />
          <div className="flex-1 gap-4 flex justify-between items-center overflow-hidden">

            {tabsCurrentPrice.map((tab, idx) => (
              <button onClick={() => setSelect(idx)} className={` font-bold flex-1 text-xs h-11 rounded-xl transition-all duration-500 ${select === idx ? "bg-int text-white" : "bg-neutral-200"}`} key={idx}>{tab}</button>
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
                    <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} >
                      <SparklinesLine color="blue" />
                    </Sparklines>

                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div>
                      <button className="text-int">خرید و فروش</button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }
          </Table>
        </div>

      </div>
    </Layout>
  )
}

export default CurrentPrice