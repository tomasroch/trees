import * as React from 'react';
import {
    Box,
    GlobalStyles,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemButton,
    listItemButtonClasses,
    ListItemContent,
    Sheet,
    Typography
} from "@mui/joy";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import ForestIcon from '@mui/icons-material/Forest';
import ParkIcon from '@mui/icons-material/Park';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ColorSchemeToggle from './ColorSchemeToggle';
import {useResolvedPath} from "react-router-dom";
import pages from "../../data/pages";

function Toggler({defaultExpanded = false, renderToggle, children}) {
    const [open, setOpen] = React.useState(defaultExpanded)
    return (
        <React.Fragment>
            {renderToggle({open, setOpen})}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: open ? "1fr" : "0fr",
                    transition: "0.2s ease",
                    "& > *": {
                        overflow: "hidden"
                    }
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    )
}

export function toggleSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-slideIn');
        if (slideIn) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
}

export function openSidebar() {
    if (typeof window !== 'undefined') {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
    }
}

export function closeSidebar() {
    if (typeof window !== 'undefined') {
        document.documentElement.style.removeProperty('--SideNavigation-slideIn');
        document.body.style.removeProperty('overflow');
    }
}

export default function NavBar() {
    const actualPath = useResolvedPath().pathname;
    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: {xs: 'fixed', md: 'sticky'},
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '262px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '262px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                <IconButton variant="soft" color="primary" size="sm" role="menuitem" component="a" href="/">
                    <ForestIcon/>
                </IconButton>
                <Typography level="title-lg">Stromy</Typography>
                <ColorSchemeToggle sx={{ml: 'auto'}}/>
            </Box>
            <Input size="sm" startDecorator={<SearchRoundedIcon/>} placeholder="Search"/>
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem key="1">
                        <ListItemButton selected={useResolvedPath().pathname === "/"} role="menuitem" component="a"
                                        href="/">
                            <ForestIcon/>
                            <ListItemContent>
                                <Typography level="title-sm">Úvod</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    {pages.map(page => {
                        if (page.subpages === null) {
                            return <ListItem key={page.path}>
                                <ListItemButton selected={actualPath === page.path} role="menuitem" component="a"
                                                href={page.path}>
                                    <ParkIcon/>
                                    <ListItemContent>
                                        <Typography level="title-sm">{page.name}</Typography>
                                    </ListItemContent>
                                </ListItemButton>
                            </ListItem>
                        } else {
                            return <ListItem key={page.path} nested>
                                <Toggler defaultExpanded={actualPath.includes(page.path)}
                                         renderToggle={({open, setOpen}) => (
                                             <ListItemButton onClick={() => setOpen(!open)}>
                                                 <ParkIcon/>
                                                 <ListItemContent>
                                                     <Typography level="title-sm">{page.name}</Typography>
                                                 </ListItemContent>
                                                 <KeyboardArrowDownIcon
                                                     sx={{transform: open ? 'rotate(180deg)' : 'none'}}
                                                 />
                                             </ListItemButton>
                                         )}
                                >
                                    <List sx={{gap: 0.5}}>
                                        {page.subpages.map(subpage => (
                                            <ListItem key={subpage.path} sx={{mt: 0.5}}>
                                                <ListItemButton
                                                    selected={actualPath === page.path + "/" + subpage.path}
                                                    role="menuitem" component="a"
                                                    href={page.path + "/" + subpage.path}>{subpage.name}</ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Toggler>
                            </ListItem>
                        }
                    })}
                </List>

                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                        mb: 2,
                    }}
                >
                    <ListItem key="2">
                        <ListItemButton>
                            <SupportRoundedIcon/>
                            Support
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Sheet>
    )
}