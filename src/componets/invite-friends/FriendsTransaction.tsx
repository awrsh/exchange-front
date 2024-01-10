import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import Table from "../common/Table"

const FriendsTransaction = () => {
  const data = [
    {
      date: "1402/11/10",
      count:3,
      reward: 200000
    },
    {
      date: "1402/09/10",
      count:9,
      reward: 600000
    },
  ]
  return (
    <div className="bg-white h-full flex gap-8 flex-col rounded-xl p-3 ">
      <div className="border-b border-int pb-5">
        <p className="font-bold text-xl">تراکنش دوستان</p>
      </div>
      <Table header={["تاریخ", "تعداد(تراکنش)", "پاداش(تومان)"]} >
        {data.map((item, idx) => (
          <StyledTableRow key={idx}>
            <StyledTableCell className="!font-num" align="center">{item.date}</StyledTableCell>
            <StyledTableCell className="!font-num" align="center">{item.count}</StyledTableCell>
            <StyledTableCell className="!font-num" align="center">{item.reward.toLocaleString()} تومان</StyledTableCell>
          </StyledTableRow>
        ))}

      </Table>
    </div>
  )
}

export default FriendsTransaction