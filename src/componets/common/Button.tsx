import { Button as ButtonMui, CircularProgress } from '@mui/material'
interface Props {
    name: string;
    className?: string;
    onClick?: () => void;
    containerClass?: string;
    disabled?: boolean;
    isLoading?: boolean;
    type?: "submit" | "button" | "reset" 
}
const Button = ({ name, disabled, className, type="submit", onClick, containerClass ,isLoading }: Props) => {
    return (
        <ButtonMui  type={type} disabled={disabled} className={`!flex !justify-center  !text-white !items-center w-full h-[48px] !bg-int ${containerClass}`} onClick={onClick}>
            {
                isLoading ? <CircularProgress size={24} color='inherit' /> : <span className={`font-bold  ${className}`}>{name}</span>
            }
            
        </ButtonMui>
    )
}

export default Button