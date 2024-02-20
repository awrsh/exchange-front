import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import Table from "../common/Table"

const FriendsInvited = () => {
    const data = [
        {
            date: "1402/09/19",
            status:"verify",
            email:"example@gmail.com"
        },
        {
            date: "1402/10/17",
            status:"pending",
            email:"example2@gmail.com"
        },
       
    ]
    return (
        <div className="bg-white bg-dark h-full flex gap-8 flex-col rounded-xl p-3  ">
            <div className="border-b border-int pb-5">
                <p className="font-bold text-xl">دوستان دعوت شده</p>
            </div>
            <Table header={["تاریخ", "وضعیت", "ایمیل"]} >
                {data.map((item, idx) => (
                    <StyledTableRow className="style-table-row" key={idx}>
                        <StyledTableCell className="!font-num dark:!text-white" align="center">{item.date}</StyledTableCell>
                        <StyledTableCell className="!font-num" align="center">{item.status === "verify"?<span className="text-green-500">تائید شده</span>:<span className="text-yellow-500">در حال انتظار</span>}</StyledTableCell>
                        <StyledTableCell className="!font-num dark:!text-white" align="center">{item.email}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </Table>
        </div>
    )
}

export default FriendsInvited