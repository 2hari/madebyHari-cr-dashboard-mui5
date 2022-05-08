import { Box, Typography, IconButton, Avatar } from '@mui/material';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const StoryWrapper = styled(Box)({
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  borderRadius: '15px',
});

const VidCard = () => {
  return (
    <StoryWrapper>
      <Box sx={{ display: 'flex', p: 1.5, my: 1.6 }}>
        <Image alt='active girl' src='/mathGirl.png' height={57} width={57} />
        <Box ml={2} sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>
              Real Numbers and Their Operations
            </Typography>
            <IconButton sx={{ p: 0 }}>
              <MoreVertRoundedIcon sx={{ fontSize: '13px' }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 1.5,
            }}
          >
            <Box sx={{ display: 'flex', color: '#f59321' }}>
              <Typography
                sx={{ bgcolor: '#fffaf3', fontSize: '8px', mr: 1, p: 1 }}
              >
                Maths
              </Typography>
              <Typography
                sx={{ bgcolor: '#fffaf3', fontSize: '8px', mr: 1, p: 1 }}
              >
                Algebra
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 1,
                  bgcolor: '#fffaf3',
                }}
              >
                <Typography sx={{ fontSize: '8px', mr: 0.5 }}>ICSE</Typography>
                <InfoOutlinedIcon sx={{ color: '#aea9a3', fontSize: '8px' }} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#aaaaaa', fontSize: '10px', mr: 0.5 }}>
                by Julia Michael
              </Typography>
              <Avatar
                alt='ava jones'
                src='/avaJones.jpg'
                sx={{ width: 15, height: 15 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </StoryWrapper>
  );
};

const Videos = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image alt='playlist' src='/playlist2.png' height={28} width={30} />
          <Typography variant='h6' ml={1.2}>
            Videos to watch
          </Typography>
        </Box>
        <Typography sx={{ color: '#14a9ff', fontSize: '15px' }}>
          View All
        </Typography>
      </Box>
      <VidCard />
      <VidCard />
      <VidCard />
    </Box>
  );
};

export default Videos;
