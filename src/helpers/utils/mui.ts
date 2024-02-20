import { TableRow, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


export const StyledTableRow = styled(TableRow)(() => ({
    position: "relative",
    "&:nth-of-type(odd)": {
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
   
        fontFamily: "bold",
        whiteSpace: "nowrap",
    
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 13,
        fontFamily: "regular" ,
        borderColor: "transparent",
    },
}));
