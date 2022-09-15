import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckOut = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOut} />
            <Route exact path='/signin' component={SignInAndSignUpPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
};

export default App;
