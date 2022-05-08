import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Opportunities = () => {
  return (
    <Box sx={{ border: 1, p: 3, borderRadius: 3, borderColor: '#cccccc' }}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
            Special Opportunities
          </Typography>
          <Typography sx={{ color: '#14a9ff', fontSize: '15px' }}>
            View All
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: '#fabb77',
            color: '#15424e',
            px: 1.5,
            py: 2,
            borderRadius: 2,
            position: 'relative',
            mb: 4,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 16, lineHeight: '80%' }}>
            Essay Writing
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 28, mb: 3 }}>
            $10,000
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
              Pennsylvania State University
            </Typography>
            <Box sx={{ position: 'absolute', right: 14 }}>
              <Image alt='winner ribbon' src='/ro.png' height={50} width={40} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: '#47a0d8',
            color: 'white',
            px: 1.5,
            py: 2,
            borderRadius: 2,
            position: 'relative',
            mb: 1,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 16, lineHeight: '80%' }}>
            Scholarship Test
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 28, mb: 3 }}>
            $10,000
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
              Scholarship Test
            </Typography>
            <Box sx={{ position: 'absolute', right: 14 }}>
              <Image alt='winner ribbon' src='/rb.png' height={50} width={40} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Opportunities;
