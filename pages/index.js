import { Box } from '@mui/material';
import Head from 'next/head';

import SideBar from '../components/SideBar';
import Header from '../components/Header';
import WidgetLayout from '../components/WidgetLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Made by hari</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Box sx={{ display: 'flex', width: '1366px', mx: 'auto' }}>
        <Box sx={{}}>
          <SideBar />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Header />
          <WidgetLayout />
        </Box>
      </Box>
    </>
  );
}
