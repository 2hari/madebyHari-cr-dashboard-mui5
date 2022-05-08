import { Box, Typography, IconButton, Avatar, Grid } from '@mui/material';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const SponsorWrapper = styled(Box)({
  boxShadow: '0 3px 7px #d9d9d9',
  // boxShadow: '3px 3px 15px 1px #f2f2f2',
  borderRadius: '7px',
});

const Sponsordata = [
  {
    name: 'Main Pizza',
    logo: '/pzza.png',
    when: '6m ago',
    much: '$0.25',
  },
  {
    name: 'McDonalds',
    logo: '/mac.png',
    when: '24m ago',
    much: '$12',
  },
  {
    name: 'Emma Stone',
    logo: '/mina.jpg',
    when: '38m ago',
    much: '$8.5',
  },
  {
    name: 'Nike',
    logo: '/nike.png',
    when: '1h ago',
    much: '$11.25',
  },
  {
    name: 'Elizabeth Bo',
    logo: '/tina.jpg',
    when: '2h ago',
    much: '$24',
  },
];

const Sponsor = ({ d }) => {
  return (
    <Grid item xs={1}>
      <SponsorWrapper>
        <Box sx={{ p: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt='sponsor logo'
              src={d.logo}
              sx={{ width: 45, height: 45, mr: 0.7 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <p
                style={{
                  fontSize: '9px',
                  lineHeight: '90%',
                  fontWeight: 500,
                  MarginBottom: 0,
                }}
              >
                {d.name}
              </p>
              <p
                style={{ fontSize: '8px', lineHeight: '5%', color: '#aaaaaa' }}
              >
                {d.when}
              </p>
            </Box>
            <IconButton>
              <MoreVertRoundedIcon
                sx={{
                  fontSize: 15,
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              mt: 3,
              mb: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: '9px', mr: 2 }}>Sponsored</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
              {d.much}
            </Typography>
          </Box>
        </Box>
      </SponsorWrapper>
    </Grid>
  );
};
Sponsor.displayName = 'Sponsor';

const Sponshership = () => {
  return (
    <Box
      sx={{
        border: 1,
        px: 2.3,
        pt: 3,
        pb: 3,
        borderRadius: 3,
        borderColor: '#e7e7e7',
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image alt='coins' src='/coins.png' height={25} width={25} />
            <Typography variant='h6' ml={1.4}>
              My sponsorships
            </Typography>
          </Box>
          <Typography sx={{ color: '#14a9ff', fontSize: '15px' }}>
            View All
          </Typography>
        </Box>
        <Grid container columns={{ xs: 5 }} spacing={3}>
          {Sponsordata.map((d, i) => (
            <Sponsor key={i} d={d} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
Sponshership.displayName = 'Sponshership';

export default Sponshership;
