import { ListItemText, MenuList, Paper } from '@mui/material';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  const navLinks = [
    {
      name: 'Books',
      href: '/',
    },
    {
      name: 'Reading List',
      href: '/reading-list',
    },
  ];
  return (
    <Paper elevation={1} sx={{ height: 'inherit', p: 2 }}>
      <MenuList
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: {
            xs: 'row',
            md: 'column',
          },
        }}
      >
        {navLinks.map(({name, href}) => (
          <NavLink
            className={({ isActive }) => clsx('navlink', { active: isActive })}
            to={href}
            key={name}
          >
            <ListItemText  sx={{ width: '100%' }}>
              {name}
            </ListItemText>
          </NavLink>
        ))}
      </MenuList>
    </Paper>
  );
};
export default SideNav;
