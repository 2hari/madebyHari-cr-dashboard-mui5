import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Stories = () => {
  return (
    <Box
      sx={{
        border: 1,
        px: 3,
        pt: 3,
        pb: 1,
        borderRadius: 3,
        borderColor: '#e7e7e7',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
            Latest Stories
          </Typography>
          <Typography sx={{ color: '#14a9ff', fontSize: '15px' }}>
            View All
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: 1, mr: 1 }}>
            <Image
              style={{ borderRadius: 7 }}
              alt='money'
              src='/mon.jpg'
              height={73}
              width={130}
            />
            <Typography sx={{ fontSize: '13px', color: '#6a6187' }}>
              Learn: How to earn more Tuition Coins
            </Typography>
          </Box>
          <Box sx={{ flex: 1, ml: 1 }}>
            <Image
              style={{ borderRadius: 7 }}
              alt='microsoft'
              src='/soft.jpg'
              height={73}
              width={130}
            />
            <Typography
              sx={{ fontSize: '13px', color: '#6a6187', lineHeight: 1.2 }}
            >
              Microsoft announces 1 Million Dollar scholarship for young
              students.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
Stories.displayName = 'Stories';

export default Stories;
