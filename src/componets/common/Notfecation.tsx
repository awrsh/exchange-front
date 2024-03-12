import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { FiBell } from 'react-icons/fi';
import CardNotfication from './CardNotfication';

export default function Notfecation() {
    const [select, setSelect] = React.useState(0)
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

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
                >
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
                                        <div className='flex items-center gap-2 px-3'>
                                            <button onClick={() => setSelect(0)} className={`text-[13px] px-3 py-2 rounded-lg ${select === 0 ? "bg-green-500 text-white" : ""}`}>اعلانات سیتمی</button>
                                            <button onClick={() => setSelect(1)} className={`text-[13px] px-3 py-2 rounded-lg ${select === 1 ? "bg-green-500 text-white" : ""}`}>اعلانات</button>
                                        </div>
                                        <div className='my-5 px-3'>
                                            <CardNotfication />
                                        </div>
                                        <div className='flex items-center justify-end gap-2 px-3 !mr-auto'>
                                            <button className={`text-[13px] px-3 py-2 rounded-lg bg-green-500 text-white`}>خواندن همه</button>
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