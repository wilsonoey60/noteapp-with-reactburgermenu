import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { LocaleConsumer } from '../contexts/LocaleContext';

function Mobilenavapp({ logout, name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <LocaleConsumer>
      {
        ({ locale, toggleLocale}) => {
          return (
            <>
              <Menu
                isOpen={menuOpen}
                onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
                styles={{
                  bmMenuWrap: {
                    position: 'fixed',
                    top: '0px',
                    width: '100%',
                    left: '0px'
                  },
                }}
              >
                <a onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</a>
                <Link to="/"><a onClick={toggleLocale}><FiHome /> {locale === 'id' ? 'Beranda' : 'Home'}</a></Link>
                <Link to="/add"><a onClick={toggleLocale}><FiPlusCircle /> {locale === 'id' ? 'Tambah Kontak' : 'Add Contact'}</a></Link>
                <a onClick={logout}><FiLogOut /> {name}</a>
              </Menu>
            </>
          )
        }
      }
    </LocaleConsumer>
  );
}

export default Mobilenavapp;