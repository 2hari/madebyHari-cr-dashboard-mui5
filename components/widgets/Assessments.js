import { Box, Typography } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const SavedAssn = styled(Box)({
  boxShadow: '0px 2px 7px 1px #f2f2f2',
  borderRadius: '3px',
});

const Assessments = () => {
  return (
    <Box sx={{ border: 1, p: 2.3, borderRadius: 3, borderColor: '#e7e7e7' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image alt='clipboard' src='/clipboard.png' height={25} width={25} />
          <Typography variant='h6' ml={1.4}>
            Assessments
          </Typography>
        </Box>
        <Typography sx={{ color: '#14a9ff', fontSize: '15px' }}>
          View All
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', my: 2.7 }}>
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#b8e5ff',
            justifyContent: 'space-between',
            px: 1,
            py: 1.4,
            borderRadius: 2,
            mr: 1,
            flexGrow: 1,
          }}
        >
          <Typography sx={{ fontSize: '13px', color: '#576973' }}>
            Total Assesments
          </Typography>
          <Typography
            sx={{ fontSize: '13px', fontWeight: 600, color: '#576973' }}
          >
            108
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#fddfbb',
            justifyContent: 'space-between',
            px: 1,
            py: 1.4,
            borderRadius: 2,
            ml: 1,
            flexGrow: 1,
          }}
        >
          <Typography sx={{ fontSize: '13px', color: '#726658' }}>
            Total Coins Earned
          </Typography>
          <Typography
            sx={{ fontSize: '13px', fontWeight: 600, color: '#726658' }}
          >
            $1800
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, mb: 2 }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: '15px' }}>
          Saved Assessments
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '13px', color: '#aaaaaa', mr: 1 }}>
            Mathematics
          </Typography>
          <KeyboardArrowDownRoundedIcon
            sx={{ fontSize: '13px', color: '#aaaaaa' }}
          />
        </Box>
      </Box>
      <SavedAssn>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 1,
            py: 1.6,
            mb: 2.4,
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
            Algebra
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
            50 Questions
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>2h</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>$25</Typography>
        </Box>
      </SavedAssn>
      <SavedAssn>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 1,
            py: 1.6,
            mb: 1.8,
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
            Algebra
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
            50 Questions
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>2h</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>$25</Typography>
        </Box>
      </SavedAssn>
    </Box>
  );
};
Assessments.displayName = 'Assessments';

export default Assessments;
