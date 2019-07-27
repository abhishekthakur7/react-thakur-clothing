import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>Contact</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link to='/signin' className='option'>Sign In</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({user : {currentUser}, cartDropdown : {hidden}}) => (  //destructure required props from root reducer/state
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(Header);