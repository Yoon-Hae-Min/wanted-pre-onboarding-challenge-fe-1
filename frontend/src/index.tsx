import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Layout from './components/Common/Layout/Layout';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import AuthenticateRoute from './routers/AuthenticateRoute';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnMount: false,
    },
  },
});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route element={<AuthenticateRoute isAuthenticated={true} />}>
                <Route path="/" element={<Main />}></Route>
                <Route path="/:id" element={<Main />}></Route>
              </Route>
              <Route element={<AuthenticateRoute isAuthenticated={false} />}>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
