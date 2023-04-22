import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import user from '../models/user';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'

export function Navbar() {  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
    
  const [usuarioAtual, setUsuarioAtual] = useState<user | null>(null);
  
  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');    

    if (localStorageUser) {
      setUsuarioAtual(JSON.parse(localStorageUser))
    }  

  }, [])

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate()

  const handleLoginCliente = () => {
    const cliente: user = {
      id: 1,
      nome: 'Dougras',
      categoria: 'CLIENTE',
      email: 'doguinha@dougras.com'
    }

    localStorage.setItem('user', JSON.stringify(cliente));
    setUsuarioAtual(cliente);

    navigate(0);

    toast.success('Login cliente efetuado com sucesso');
  }

  const handleLoginPrestador = () => {
    const prestador: user = {
      id: 1,
      nome: 'Paredinha',
      categoria: 'PRESTADOR',
      email: 'paredinha@paredes.com'
    }

    setUsuarioAtual(prestador);
    localStorage.setItem('user', JSON.stringify(prestador));

    navigate(0);

    toast.success('Login prestador efetuado com sucesso');
  }  
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              >
              CUIDE
            </Typography>
          </Link>

          <Divider style={{ background: 'white', marginLeft: '1rem', marginRight: '1rem' }} orientation="vertical" variant='middle' flexItem />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/agendamentos' style={{ textDecoration: 'none', color: 'inherit' }}>

              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge color="error">
                  <Typography variant='body1'>
                    Agendamentos
                  </Typography>                
                  <EventIcon />                
                </Badge>
              </IconButton>
            </Link>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <Button
              onClick={handleLoginCliente} 
              size="large"
              aria-label="show 17 new notifications"
              color='inherit'
              variant={usuarioAtual?.categoria !== 'CLIENTE' && 'text' || 'outlined'}
              disabled={usuarioAtual?.categoria === 'CLIENTE'}
              >                    
              <Typography variant='body1'>
                {usuarioAtual?.categoria === 'CLIENTE' && 'LOGADO CLIENTE' || 'LOGIN CLIENTE'}
              </Typography>
            </Button>

            <Button
              onClick={handleLoginPrestador} 
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"  
              variant={usuarioAtual?.categoria !== 'PRESTADOR' && 'text' || 'outlined'}
              disabled={usuarioAtual?.categoria === 'PRESTADOR'}          
              >                    
              <Typography variant='body1'>
                {usuarioAtual?.categoria === 'PRESTADOR' && 'LOGADO PRESTADOR' || 'LOGIN PRESTADOR'}
              </Typography>
            </Button>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {/* <Toaster /> */}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>    
  );
}
