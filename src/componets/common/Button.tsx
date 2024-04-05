import { Button as ButtonMui, CircularProgress } from '@mui/material'
interface Props {
    name: string;
    className?: string;
    onClick?: () => void;
    containerClass?: string;
    disabled?: boolean;
    isLoading?: boolean;
    type?: "submit" | "button" | "reset";
    sx?:any
}
const Button = ({ name, sx,disabled, className, type="submit", onClick, containerClass ,isLoading }: Props) => {
    return (
        <ButtonMui sx={sx}  type={type} disabled={disabled} className={`!flex !justify-center disabled:opacity-90  !text-white disabled:!bg-blue-300 !items-center w-full h-[48px] !bg-int ${containerClass}`} onClick={onClick}>
            {
                isLoading ? <CircularProgress size={24} color='inherit' /> : <span className={`font-bold text-[13px] ${className}`}>{name}</span>
            }
            
        </ButtonMui>
    )
}

export default Button