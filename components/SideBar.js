import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import GetAppIcon from '@mui/icons-material/GetApp';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const SideNavWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '116px',
  boxShadow: '3px 0px 10px 1px #f2f2f2',
});

const navData = [
  {
    icon: HomeRoundedIcon,
  },
  {
    icon: CalendarMonthOutlinedIcon,
  },
  {
    icon: ListAltOutlinedIcon,
  },
  {
    icon: VideocamOutlinedIcon,
  },
  {
    icon: MonetizationOnOutlinedIcon,
  },
  {
    icon: SchoolOutlinedIcon,
  },
];

const NavIconItem = ({ icon }) => {
  const IconTag = icon;
  return (
    <Grid item xs={2}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ':hover': { bgcolor: '#8fd2f4', cursor: 'pointer' },
          borderRadius: 2,
          mx: 3,
          py: 1,
        }}
      >
        <IconTag
          sx={{
            fontSize: 24,
            color: '#aaaaaa',
          }}
        />
      </Box>
    </Grid>
  );
};

const SideBar = () => {
  return (
    <SideNavWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3.5,
          mb: 5.5,
        }}
      >
        <Image src='/material.svg' height={50} width={50} alt='logo' />
      </Box>
      <Grid
        container
        rowSpacing={6}
        columns={{ xs: 2 }}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {navData.map((d, i) => (
          <NavIconItem icon={d.icon} key='i' />
        ))}
      </Grid>
      {/* </Box> */}
      <Box sx={{ my: 11 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1,
          }}
        >
          <Image src='/app_inst.svg' alt='install app' height={50} width={50} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#14a9ff',
            justifyContent: 'center',
          }}
        >
          <GetAppIcon sx={{ fontSize: 15 }} />
          <Typography variant='caption'>Install App</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <LogoutOutlinedIcon
          sx={{
            fontSize: 28,
            transform: 'rotate(180deg)',
            ':hover': { cursor: 'pointer' },
          }}
        />
      </Box>
    </SideNavWrapper>
  );
};

export default SideBar;
