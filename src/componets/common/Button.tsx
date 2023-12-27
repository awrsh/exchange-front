import { Button as ButtonMui } from '@mui/material'
interface Props {
    name: string;
    className?: string;
    onClick?: () => void;
    containerClass?: string;
    disabled?: boolean;
    type?: "submit" | "button" | "reset" 
}
const Button = ({ name, disabled, className, type="submit", onClick, containerClass  }: Props) => {
    return (
        <ButtonMui  type={type} disabled={disabled} className={`!flex !justify-center  !text-white !items-center w-full !py-3 !bg-int ${containerClass}`} onClick={onClick}>
            <span className={`font-bold  ${className}`}>{name}</span>
        </ButtonMui>
    )
}

export default Button