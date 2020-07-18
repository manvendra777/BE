import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from '@material-ui/icons/MoreVert'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Cookies from 'js-cookie';
import EditIcon from '@material-ui/icons/Edit';
export default function Edit(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Edit = () => {
       console.log('edit');
       props.edit();
    }
    return (
        <div style={{marginLeft:'auto',marginRight:'-1%',marginTop:'-1%'}}>
            <IconButton
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
                <MenuItem style={{color:'#03a9f4'}} onClick={Edit}>Edit <EditIcon style={{marginLeft:'4%'}}/></MenuItem>
            </Menu>
        </div>

    );
}
