import { Box, Badge, Typography, Avatar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: 4,
        mb: 8,
        ml: 4,
        mr: 10,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: 28, fontWeight: 500 }}>
          Hello, Ava Jones
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#FAC98D',
            px: 2,
            py: 0.4,
            mr: 3,
            alignItems: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant='body2' mr={4} sx={{ fontWeight: 500 }}>
            Current Account Value
          </Typography>
          <Typography variant='h6'>$23,336</Typography>
        </Box>
        <SearchOutlinedIcon sx={{ mr: 3, fontSize: 22 }} />
        <Badge variant='dot' color='primary' sx={{ mr: 3 }}>
          <NotificationsOutlinedIcon
            sx={{
              fontSize: 22,
            }}
          />
        </Badge>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt='ava jones'
            src='/avaJones.jpg'
            sx={{ width: 30, height: 30, mr: 1.5 }}
          />
          <Typography variant='body2'>Ava Jones</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
