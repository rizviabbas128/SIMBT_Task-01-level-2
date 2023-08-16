import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Add from './components/Add';
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material';
import Auth from './components/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <BrowserRouter>
      <div className='App'>
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/main' element={<>
            <ThemeProvider theme={darkTheme}>
              <Box bgcolor={'Background.default'} color={'text.primary'}>
                <Navbar />
                <Stack direction='row' spacing={2} justifyContent='space-between'>
                  <Sidebar setMode={setMode} mode={mode} />
                  <Feed />
                  <Rightbar />
                </Stack>
                <Add />
              </Box>
            </ThemeProvider>
          </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
