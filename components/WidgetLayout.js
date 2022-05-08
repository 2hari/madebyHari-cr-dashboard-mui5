import { Box, Grid } from '@mui/material';

import Goals from './widgets/Goals';
import Account from './widgets/Account';
import Attendance from './widgets/Attendance';
import Sponshership from './widgets/Sponshership';
import Opportunities from './widgets/Opportunities';
import Assessments from './widgets/Assessments';
import Videos from './widgets/Videos';
import Stories from './widgets/Stories';

const Lgrid = () => {
  return (
    <Box>
      <Grid container spacing={3} columns={{ xs: 8 }}>
        <Grid item xs={8}>
          <Grid container spacing={3} columns={{ xs: 12 }}>
            <Grid item xs={7}>
              <Goals />
            </Grid>
            <Grid item xs={5}>
              <Account />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Sponshership />
        </Grid>
        <Grid item xs={4}>
          <Assessments />
        </Grid>
        <Grid item xs={4}>
          <Videos />
        </Grid>
      </Grid>
    </Box>
  );
};
Lgrid.displayName = 'Lgrid';

const Rgrid = () => {
  return (
    <Box mr={4}>
      <Grid container spacing={4} columns={{ xs: 4 }}>
        <Grid item xs={4}>
          <Attendance />
        </Grid>
        <Grid item xs={4}>
          <Opportunities />
        </Grid>
        <Grid item xs={4}>
          <Stories />
        </Grid>
      </Grid>
    </Box>
  );
};
Rgrid.displayName = 'Rgrid';

const WidgetLayout = () => {
  return (
    <Box mx={6}>
      <Grid container spacing={4} columns={{ xs: 12 }}>
        <Grid item xs={8}>
          <Lgrid />
        </Grid>
        <Grid item xs={4}>
          <Rgrid />
        </Grid>
      </Grid>
    </Box>
  );
};
WidgetLayout.displayName = 'WidgetLayout';

export default WidgetLayout;
