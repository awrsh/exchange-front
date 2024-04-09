import { Slider } from '@mui/material'
import { styled } from '@mui/material/styles';
interface Props{
    color?:string;
    onChange?:any;
    value?:number;
    disabled?:boolean;
}
const CustomSlider = ({color="#52af77",value,onChange,disabled}:Props) => {

    function valuetext(value: number) {
        return <span className='font-num'>{value}%</span>;
    }

    const PrettoSlider = styled(Slider)({
        color,
        height: 8,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&::before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: color,
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&::before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    });


    const marks = [
        {
          value: 0,
          label: <span className='font-num text-xs'>0%</span>,
        },
        {
          value: 25,
          label: <span className='font-num text-xs'>25%</span>,
        },
        {
          value: 50,
          label: <span className='font-num text-xs'>50%</span>,
        },
        {
          value: 75,
          label: <span className='font-num text-xs'>75%</span>,
        },
        {
          value: 100,
          label: <span className='font-num text-xs'>100%</span>,
        },
      ];
    return (
        <div className='mt-3'>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={0}
                step={25}
                valueLabelFormat={valuetext}
                marks={marks}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
        </div>
    )
}

export default CustomSlider