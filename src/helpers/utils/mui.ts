import { TableRow, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


export const StyledTableRow = styled(TableRow)(() => ({
    position: "relative",
    "&:nth-of-type(odd)": {
        backgroundColor: "#f7f7f7",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#e1e1e1",
        color: "#626262",
        fontFamily: "es-bold",
        whiteSpace: "nowrap",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        fontFamily: "es-regular",
        color: "#222222",
        borderColor: "transparent",
    },
}));
