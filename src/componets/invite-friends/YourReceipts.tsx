import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import Table from "../common/Table"

const YourReceipts = () => {
    const data = [
        {
            verify: "1 تا 3 نفر",
            reward: 20
        },
        {
            verify: "4 تا 10 نفر",
            reward: 25
        },
        {
            verify: "4 تا 10 نفر",
            reward: 25
        },
        {
            verify: "4 تا 10 نفر",
            reward: 25
        },

    ]
    return (
        <div className="bg-white bg-dark h-full overflow-auto flex gap-6 flex-col rounded-xl p-3">
            <div className="border-b border-int pb-5">
                <p className="font-bold text-xl">پاداش های دریافتی شما</p>
            </div>
            <Table header={["دوستان تائید هویت شده", "پاداش"]}>
                {
                    data.map((item, idx) => (
                        <StyledTableRow className="style-table-row" key={idx}>
                            <StyledTableCell className="!font-num dark:!text-white " align="center">{item.verify}</StyledTableCell>
                            <StyledTableCell className="!font-num dark:!text-white" align="center">%{item.reward}</StyledTableCell>
                        </StyledTableRow>

                    ))
                }
            </Table>
        </div>
    )
}

export default YourReceipts