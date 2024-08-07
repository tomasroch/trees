import * as React from 'react';
import {useColorScheme} from '@mui/joy/styles';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import {IconButton} from "@mui/joy";

function invertImages(value){
    var img = document.getElementsByTagName("img");
    var imgList = Array.prototype.slice.call(img);
    imgList.forEach(image => image.style.filter="invert("+value+")");
}

export default function ColorSchemeToggle(props) {
    const {onClick, sx, ...other} = props;
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return (
            <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                {...other}
                sx={sx}
                disabled
            />
        );
    }
    return (
        <IconButton
            id="toggle-mode"
            size="sm"
            variant="outlined"
            color="neutral"
            {...other}
            onClick={(event) => {
                if (mode === 'light') {
                    setMode('dark');
                    invertImages(1);
                } else {
                    setMode('light');
                    invertImages(0);
                }
                onClick?.(event);
            }}
            sx={[
                {
                    '& > *:first-of-type': {
                        display: mode === 'dark' ? 'none' : 'initial',
                    },
                    '& > *:last-child': {
                        display: mode === 'light' ? 'none' : 'initial',
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <DarkModeRoundedIcon/>
            <LightModeIcon/>
        </IconButton>
    );
}