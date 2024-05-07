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
                    <ListItem>
                        <ListItemButton selected={useResolvedPath().pathname === "/"} role="menuitem" component="a"
                                        href="/">
                            <ForestIcon/>
                            <ListItemContent>
                                <Typography level="title-sm">Úvod</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem nested>
                        <Toggler defaultExpanded={useResolvedPath().pathname.includes("/zakladni-pojmy")}
                                 renderToggle={({open, setOpen}) => (
                                     <ListItemButton onClick={() => setOpen(!open)}>
                                         <ParkIcon/>
                                         <ListItemContent>
                                             <Typography level="title-sm">Základní pojmy</Typography>
                                         </ListItemContent>
                                         <KeyboardArrowDownIcon
                                             sx={{transform: open ? 'rotate(180deg)' : 'none'}}
                                         />
                                     </ListItemButton>
                                 )}
                        >
                            <List sx={{gap: 0.5}}>
                                <ListItem sx={{mt: 0.5}}>
                                    <ListItemButton selected={useResolvedPath().pathname === "/zakladni-pojmy/strom"}
                                                    role="menuitem" component="a"
                                                    href="/zakladni-pojmy/strom">Strom</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/zakladni-pojmy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/zakladni-pojmy/strom">Les</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/zakladni-pojmy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/zakladni-pojmy/strom">Centrum / Bicentrum</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/zakladni-pojmy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/zakladni-pojmy/strom">Centroid / Bicentroid</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
                    <ListItem nested>
                        <Toggler defaultExpanded={useResolvedPath().pathname.includes("/korenove-stromy")}
                                 renderToggle={({open, setOpen}) => (
                                     <ListItemButton onClick={() => setOpen(!open)}>
                                         <ParkIcon/>
                                         <ListItemContent>
                                             <Typography level="title-sm">Kořenové stromy</Typography>
                                         </ListItemContent>
                                         <KeyboardArrowDownIcon
                                             sx={{transform: open ? 'rotate(180deg)' : 'none'}}
                                         />
                                     </ListItemButton>
                                 )}
                        >
                            <List sx={{gap: 0.5}}>
                                <ListItem sx={{mt: 0.5}}>                                   {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/korenove-stromy}"}
                                                    role="menuitem" component="a"
                                                    href="/korenove-stromy/">Základní definice</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/korenove-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/korenove-stromy/strom">Předchůdce / Následník</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/korenove-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/korenove-stromy/strom">Vrstva / Hloubka / Výška</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/korenove-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/korenove-stromy/strom">Uspořádaný kořenový strom</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
                    <ListItem nested>
                        <Toggler
                            renderToggle={({open, setOpen}) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <ParkIcon/>
                                    <ListItemContent>
                                        <Typography level="title-sm">Isomorfismus</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={{transform: open ? 'rotate(180deg)' : 'none'}}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{gap: 0.5}}>
                                <ListItem sx={{mt: 0.5}}>                                   {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/isomorfismus/stro"}
                                                    role="menuitem" component="a"
                                                    href="/isomorfismus/zakladni-definice">Základní definice</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/isomorfismus/stro"}
                                                    role="menuitem" component="a"
                                                    href="/isomorfismus/korenove-stromy">Kořenové stromy</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/isomorfismus/stro"}
                                                    role="menuitem" component="a"
                                                    href="/isomorfismus/korenove-stromy">Uspořádané kořenové stromy</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>

                    <ListItem nested>
                        <Toggler
                            renderToggle={({open, setOpen}) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <ParkIcon/>
                                    <ListItemContent>
                                        <Typography level="title-sm">Binární stromy</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={{transform: open ? 'rotate(180deg)' : 'none'}}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{gap: 0.5}}>
                                <ListItem sx={{mt: 0.5}}>                                   {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/binarni-stromy"}
                                                    role="menuitem" component="a"
                                                    href="/binarni-stromy/zakladni-definice">Základní definice</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/binarni-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/binarni-stromy/korenove-stromy">Binární vyhledávací strom</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/binarni-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/binarni-stromy/korenove-stromy">Prohledávání do hloubky</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/binarni-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/binarni-stromy/korenove-stromy">Prohledávání do šířky</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/binarni-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/binarni-stromy/korenove-stromy">Halda</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/binarni-stromy/stro"}
                                                    role="menuitem" component="a"
                                                    href="/binarni-stromy/korenove-stromy">Další varianty</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>

                    <ListItem nested>
                        <Toggler
                            renderToggle={({open, setOpen}) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <ParkIcon/>
                                    <ListItemContent>
                                        <Typography level="title-sm">Minimální kostra</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={{transform: open ? 'rotate(180deg)' : 'none'}}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{gap: 0.5}}>
                                <ListItem sx={{mt: 0.5}}>                                   {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/minimalni-kostra"}
                                                    role="menuitem" component="a"
                                                    href="/minimalni-kostra/zakladni-definice">Základní definice</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/minimalni-kostra/stro"}
                                                    role="menuitem" component="a"
                                                    href="/minimalni-kostra/korenove-stromy">Kruskalův algoritmus</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/minimalni-kostra/stro"}
                                                    role="menuitem" component="a"
                                                    href="/minimalni-kostra/korenove-stromy">Jarníkův (Primův) algoritmus</ListItemButton>
                                </ListItem>
                                <ListItem>                                                          {/*TODO pathname a href*/}
                                    <ListItemButton selected={useResolvedPath().pathname === "/minimalni-kostra/stro"}
                                                    role="menuitem" component="a"
                                                    href="/minimalni-kostra/korenove-stromy">Borůvkův algoritmus</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
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
                    <ListItem>
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