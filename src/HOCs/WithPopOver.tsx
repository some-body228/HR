import React, {ReactNode} from "react";
import {Box, Popover, Typography} from "@mui/material";

interface IWithPopOver {
    text: string;
    children: ReactNode
}

export function WithPopOver(props: IWithPopOver) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box component="div"  aria-describedby={id}  sx={{padding: 0, margin: 0}}   onMouseOver={handleClick}>
                {props.children}
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onMouseMove={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{fontFamily: "SB sans Text", p: 2}}>{props.text}</Typography>
            </Popover>
        </>
    )
}