import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from '@material-ui/icons/MoreVert'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Cookies from 'js-cookie';
export default function Logout() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        const cookieValue = document.cookie.split('=')[0];
        Cookies.remove(cookieValue);
        window.location = "/"
    }
    return (
        <span>
            <IconButton
            style={{color:'white'}}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>

            <Menu
            style={{marginTop:'1%'}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem style={{color:'red'}} onClick={logout}>Logout <ExitToAppIcon/></MenuItem>
            </Menu>
        </span>

    );
}
