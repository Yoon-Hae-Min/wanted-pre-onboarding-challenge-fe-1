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
import { PAGE_PATH } from './constants/path';
import { Reset } from 'styled-reset';

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
        <Reset />
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route element={<AuthenticateRoute isAuthenticated={true} />}>
                <Route path={PAGE_PATH.HOME} element={<Main />}></Route>
                <Route path={PAGE_PATH.TODO_DETAIL(':id')} element={<Main />}></Route>
              </Route>
              <Route element={<AuthenticateRoute isAuthenticated={false} />}>
                <Route path={PAGE_PATH.SIGN_IN} element={<SignIn />}></Route>
                <Route path={PAGE_PATH.SIGN_UP} element={<SignUp />}></Route>
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
