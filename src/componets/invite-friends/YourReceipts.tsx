import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import useGetReferalQuery from "../../hook/query/referal/useGetReferalQuery"
import Table from "../common/Table"

const YourReceipts = () => {
    const {data, isLoading} = useGetReferalQuery()

    return (
        <div className="bg-white bg-dark h-full overflow-auto flex gap-6 flex-col rounded-xl p-3">
            <div className="border-b border-int pb-5 flex items-center justify-between">
                <p className="font-bold text-xl">پاداش های دریافتی شما</p>
            </div>
            <Table isLoaidng={isLoading} length={data?.objects.length} header={["افراد زیر مجموعه","درصد"]}>
                {
                    data?.objects.map((item, idx) => (
                        <StyledTableRow className="style-table-row" key={idx}>
                            <StyledTableCell className="!font-num dark:!text-white " align="center">{item.min_subset_count}</StyledTableCell>
                            <StyledTableCell className="!font-num dark:!text-white" align="center">%{item.percent}</StyledTableCell>
                        </StyledTableRow>

                    ))
                }
            </Table>
        </div>
    )
}

export default YourReceipts