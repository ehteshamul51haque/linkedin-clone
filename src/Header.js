import React from 'react';
import './Header.css';
// import SearchIcon from '@material-ui/icons/Search';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655152516~hmac=28be27c0d51ee6d42fca7e33e1223b3b"
                    alt='linkedin-icon' />
                <div className='header__search'>
                    {/* <SearchIcon /> */}
                    <input type="text" />
                </div>
            </div>

            <div className='header__right'>

            </div>
        </div>
    )
}

export default Header;
