import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import LocalShippingOutlinedIcon
  from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyOutlinedIcon
  from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ManageAccountsRoundedIcon
  from '@mui/icons-material/ManageAccountsRounded';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from 'react-router-dom';
import {DarkModeContext} from '../../context/darkModeContext';
import {useContext} from 'react';

const Sidebar = () => {
  const {dispatch} = useContext (DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: 'none'}}>
          <span className="logo">Eazzyadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: 'none'}}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration: 'none'}}>
            <li>
              <ShoppingBagIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <PaymentRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsTwoToneIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span> Logs</span>
          </li>
          <li>
            <SettingsTwoToneIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ManageAccountsRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch ({type: 'LIGHT'})}
        />
        <div
          className="colorOption"
          onClick={() => dispatch ({type: 'DARK'})}
        />
      </div>
    </div>
  );
};

export default Sidebar;
