import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { FiBell } from 'react-icons/fi';
import CardNotfication from './CardNotfication';
import useGetAllNotification from '../../hook/query/notification/useGetAllNotification';
import useUpdateNotificationMutation from '../../hook/mutation/notification/useUpdateNotificationMutation';
import Button from './Button';
import { CircularProgress } from '@mui/material';

export default function Notfecation() {
    const { isLoading, data } = useGetAllNotification()
    const { mutate, isLoading: isLoadingNotification, isSuccess } = useUpdateNotificationMutation()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);


    const results = data?.objects.filter((option) => option.seen !== true)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const clickSeenNotification = () => {
        if (isLoading) return
        const notifications_ids = results?.map((option) => option.id).join(',');
        mutate({ notifications_ids })
        setOpen(false)

    }
    return (
        <Stack>
            <div className='flex'>
                <button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className='relative flex justify-center items-center w-8 h-8 rounded-full'
                >
                    {results?.length !== 0 ?
                        <span className='absolute -top-1 -right-0 w-[0.78rem] h-[0.78rem] leading-[0.78rem] flex items-center justify-center rounded-full font-num text-white text-[10px] bg-red-600'>{results?.length}</span>
                        : null
                    }
                    <FiBell className="text-gray-700" size={20} />
                </button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        className='min-w-[350px] max-w-[350px]'
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {/* <div className='flex items-center gap-2 px-3'>
                                            <button onClick={() => setSelect(0)} className={`text-[13px] px-3 py-2 rounded-lg ${select === 0 ? "bg-green-500 text-white" : ""}`}>اعلانات سیتمی</button>
                                            <button onClick={() => setSelect(1)} className={`text-[13px] px-3 py-2 rounded-lg ${select === 1 ? "bg-green-500 text-white" : ""}`}>اعلانات</button>
                                        </div> */}
                                        <div>
                                            {isLoading ? <div className='p-2 flex justify-center items-center'>
                                                <CircularProgress />
                                            </div> :
                                                results?.length === 0 ? <div>
                                                    <p className='text-center !py-10'>اعلانی وجود ندارد</p>
                                                </div> :
                                                    <>
                                                        <div className='my-5 px-3 pt-4 space-y-5'>
                                                            {
                                                                results?.map((notification, idx) => (
                                                                    <CardNotfication key={idx} notification={notification} />
                                                                ))
                                                            }
                                                        </div>
                                                        {
                                                            // @ts-ignore
                                                            isSuccess && results?.length !== 0 ?
                                                                <div className='flex items-center !pb-3 justify-end gap-2 px-3 !mr-auto'>
                                                                    <Button disabled={isLoadingNotification} name='خواندن همه' onClick={clickSeenNotification} containerClass={`text-[13px] !w-fit px-3 !h-[40px] rounded-lg !bg-green-500 text-white`} />
                                                                </div>
                                                                : null
                                                        }
                                                    </>
                                            }
                                        </div>

                                        {/* <MenuItem>
                                            <p className='font-bold text-xs'>واریز جدید</p>
                                        </MenuItem>
                                        <MenuItem>
                                            <p className='font-bold text-xs'>واریز جدید</p>
                                        </MenuItem>
                                        <MenuItem>
                                            <p className='font-bold text-xs'>واریز جدید</p>
                                        </MenuItem> */}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}