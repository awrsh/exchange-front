import Note from "../componets/RialAction/Note"
import Layout from "../componets/common/Layout"
import TomanDeposit from "../componets/RialAction/TomanDeposit"
import { useState } from "react"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"

const RialAction = () => {
  const [select] = useState(0)
  const tabs = ["واریز تومانی", "واریز شناسه", "برداشت تومانی"]

  return (
    <Layout>
      <div className="w-[95%] mx-auto">
        <h1 className="text-xl font-bold">واریز برداشت ریالی</h1>
        <div className="bg-white rounded-xl mt-4 flex gap-5 p-4">
          <div className="flex-1">
            <div className="flex gap-6">
              {
                tabs.map((tab, idx) => (
                  <button className={`text-xs px-4 py-[0.7rem] border rounded-lg ${select === idx?"bg-int text-white":"bg-[#f4f7fb]"}`} key={idx}>{tab}</button>
                ))
              }
            </div>
            {
              select === 0 &&
              <TomanDeposit />
            }
          </div>
          <Note />
        </div>
      </div>
    </Layout>
  )
}

export default WithTokenCkeck()(RialAction) 