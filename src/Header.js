import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@material-ui/icons';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655152516~hmac=28be27c0d51ee6d42fca7e33e1223b3b"
                    alt='linkedin-icon' />
                <div className='header__search'>
                    <Search />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption avatar="https://unsplash.com/photos/QXevDflbl8A" title="me" />
            </div>
        </div>
    )
}

export default Header;
