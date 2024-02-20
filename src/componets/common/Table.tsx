import { styled } from "@mui/material/styles";
import TableMui from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "#626262",
        fontFamily: "bold",
        whiteSpace: "nowrap",
        borderColor: "transparent",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        fontFamily: "regular",
        color: "#222222",
        borderColor: "transparent",
    },
}));

interface PropsTable {
    header: string[];
    children?: React.ReactNode;
    namebtn?: string;
    onClick?: () => void;
    title?: string;
    titleFooter?: string;
    subTitleFooter?: any;
    isLoaidng?: boolean;
    length?: number;
}

export default function Table({
    header,
    children,
    title,
    isLoaidng,
    length,
}: PropsTable) {
    return (
        <div className="flex-1 dark:!bg-dark">
            {title && <p className="font-es-regular text-[#3b3b3b] pb-4 pr-1">{title}</p>}
            <div className="lg:border relative rounded-tr-lg lg:rounded-lg overflow-hidden">
                <TableContainer className="" sx={{ position: "relative",background:"inherit" }} component={Paper}>
                    <TableMui>
                        <TableHead className="dark:!bg-slate-500 " >
                            <TableRow >
                                {header.map((name, i) => (
                                    <StyledTableCell className="!text-[13px] dark:!text-white" key={i} align="center">
                                        {name}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {isLoaidng && (
                            <div className="flex items-center mx-auto  justify-center min-w-full my-14 text-blue_deep">
                                <CircularProgress color="inherit" sx={{ position: "absolute", left: "50%" }} />
                            </div>
                        )}

                        {!isLoaidng && length === 0 ? (
                            <div className="py-14">
                                <p className="text-center absolute bottom-12 left-1/2 -translate-x-1/2 text-[14px] font-bold ">
                                    اطلاعاتی ثبت نشده است
                                </p>
                            </div>
                        ) : (
                            <TableBody sx={{ position: "relative" }}>{children}</TableBody>
                        )}
                    </TableMui>
                </TableContainer>
                
                
            </div>
        </div>
    );
}
