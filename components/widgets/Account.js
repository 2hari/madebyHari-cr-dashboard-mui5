import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import DoughnutChart from '../DoughnutChart';

const data = [
  {
    n: 'Attendance',
    c: '#ff91cc',
  },
  {
    n: 'Online Learning',
    c: '#ffcc91',
  },
  {
    n: 'Assessment',
    c: '#c891ff',
  },
  {
    n: 'Events',
    c: '#91a9ff',
  },
];

const ChartData = ({ d }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircleIcon
          sx={{
            fontSize: 10,
            color: `${d.c}`,
          }}
        />
        <Typography sx={{ fontSize: '12px', ml: 1, color: '#aaaaaa' }}>
          {d.n}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '12px' }}>$1500</Typography>
    </Box>
  );
};
ChartData.displayName = 'ChartData';

const Account = () => {
  return (
    <Box sx={{ border: 1, p: 2.3, borderRadius: 3, borderColor: '#e7e7e7' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image alt='coins' src='/coins.png' height={25} width={25} />
          <Typography variant='h6' ml={1.4}>
            Account Balance
          </Typography>
        </Box>
        <Typography
          variant='body2'
          sx={{
            px: 1,
            py: 0.9,
            fontWeight: 500,
            bgcolor: '#b8e5ff',
            borderRadius: 2,
          }}
        >
          $6800
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 2 }}>
        <Box mr={1}>
          <DoughnutChart />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {data.map((d, i) => (
            <ChartData key={i} d={d} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
Account.displayName = 'Account';

export default Account;
