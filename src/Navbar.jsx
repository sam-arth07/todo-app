import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const Color = ['error','success','secondary','primary']
  var randomid = Math.floor(Math.random()*4)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={Color[randomid]}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
