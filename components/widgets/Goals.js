import { Box, Typography } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

import { styled } from '@mui/material/styles';
import Image from 'next/image';

const CustomLinearProgress = styled(LinearProgress)({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#ffffff',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#77758a',
  },
});

const Goals = () => {
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
          <Image alt='trophy' src='/trophy.png' height={27} width={27} />
          <Typography variant='h6' sx={{ ml: 0.8 }}>
            Goals for this week
          </Typography>
        </Box>
        <Typography
          variant='body2'
          sx={{
            bgcolor: '#14a9ff',
            borderRadius: 1.5,
            py: 0.8,
            px: 1.2,
            color: 'white',
          }}
        >
          Set new Goal
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 3 }}>
        <Box
          sx={{
            bgcolor: '#F8A1A2',
            flex: 1,
            p: 2,
            mr: 1,
            borderRadius: 3,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Image alt='trophy' src='/tick.png' height={25} width={25} />
              <Typography ml={2.5} color='#FFFFFF'>
                Assessment
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', mt: 3, justifyContent: 'space-between' }}
            >
              <Typography variant='caption' color='#545260'>
                62%
              </Typography>
              <Typography variant='caption' color='#d3787a'>
                08/14
              </Typography>
            </Box>
            <CustomLinearProgress variant='determinate' value={62} />
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: '#afa8ff',
            flex: 1,
            p: 2,
            ml: 1,
            borderRadius: 3,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Image alt='trophy' src='/playlist1.png' height={25} width={25} />
              <Typography ml={1.5} color='#FFFFFF'>
                Online Learning
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', mt: 3, justifyContent: 'space-between' }}
            >
              <Typography variant='caption' color='#545260'>
                62%
              </Typography>
              <Typography variant='caption' color='#6b6aaf'>
                08/14
              </Typography>
            </Box>
            <CustomLinearProgress variant='determinate' value={62} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Goals;
