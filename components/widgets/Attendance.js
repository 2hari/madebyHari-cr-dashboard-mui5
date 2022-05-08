import { Box, Typography } from '@mui/material';

const Attendance = () => {
  return (
    <Box sx={{ border: 1, p: 3, borderRadius: 3, borderColor: '#e7e7e7' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 23, fontWeight: 500 }}>
            23 Days
          </Typography>
          <Typography
            sx={{ fontSize: 16, color: '#aaaaaa', lineHeight: '95%' }}
          >
            Attendance Streak
          </Typography>
        </Box>
        <Typography
          sx={{
            bgcolor: '#14a9ff',
            color: 'white',
            py: 0.7,
            px: 1.5,
            borderRadius: 2,
          }}
        >
          Mark Present
        </Typography>
      </Box>
    </Box>
  );
};

export default Attendance;
