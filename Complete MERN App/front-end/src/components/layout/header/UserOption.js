import React, { Fragment, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userAction';
import './Header.css'

const UserOption = ({ user }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const Dashboard = () => {
        navigate('/dashboard');
    };

    const Orders = () => {
        navigate('/orders');
    };

    const account = () => {
        navigate('/account');
    };

    const logoutUser = () => {
        dispatch(logout());
    };

    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: Orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ];

    if (user.role === 'admin') {
        options.unshift({ icon: <DashboardIcon />, name: "Dashboard", func: Dashboard });
    }

    return (
        <Fragment>
            <Backdrop open={open} style={{zIndex:'10'}} />
            <SpeedDial
                className='speedDial'
                ariaLabel='SpeedDial tooltip example'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{zIndex:'11'}}
                open={open}
                direction='down'
                icon={<img
                    className='speedDialIcon'
                    alt='User'
                    src={user.avatar.URL ? user.avatar.URL : '/Profile.png'}
                />}
            >
                {options.map((item) => (
                    <SpeedDialAction  
                    icon={item.icon} tooltipTitle={item.name} onClick={item.func} key={item.name} />
                ))}
            </SpeedDial>
        </Fragment>
    );
};

export default UserOption;