type Props ={
    title?:string;
    price?:number;
    name?:number;
    percent?:number;
}
const CardDetailsPrice = ({title,price,name,percent}:Props) => {
    return (
        <div className='flex-1 space-y-2'>
            <p className='flex items-center gap-2'>
                <span className={`block w-2 h-2 rounded-full ${name?"bg-green-600":"bg-neutral-800 lg:bg-slate-600"}`}></span>
                <span className={` text-xs whitespace-nowrap ${name?"text-green-600 font-num":"text-neutral-800 dark:text-white font-extrablack "}`}>{title ? title : name?.toLocaleString()}</span>
            </p>
            <p className='flex items-center gap-2'>
                <span className='block w-2 h-2 rounded-full bg-green-600'></span>
                <span className={`font-num text-xs ${percent?"text-green-600":"text-neutral-800 dark:text-white"}`}>{percent ? `${percent}%` :price?.toLocaleString()}</span>
            </p>
        </div>
    )
}

export default CardDetailsPrice