import 'client/components/Home/index.css';

import * as Sentry from '@sentry/node'
import { RootAppWithApollo } from 'client/hoc/RootAppWithApollo';
import { theme } from 'client/theme';
import { GlobalStyle } from 'client/theme/global.style';
import App from 'next/app';
import getConfig from 'next/config'
import React from 'react';
import { ThemeProvider } from 'theme-ui'

const { publicRuntimeConfig } = getConfig();

const { SENTRY_DSN } = publicRuntimeConfig

const sentryConfig = {
  enabled: process.env.NODE_ENV === 'production',
  dsn: SENTRY_DSN,
};

Sentry.init(sentryConfig)


class CustomApp extends App<any, any> {
  render() {
    // Workaround for https://github.com/zeit/next.js/issues/8592
    const { err, pageProps, Component } = this.props;

    const modifiedPageProps = { ...pageProps, err }

    const ComponentWithApollo = RootAppWithApollo(Component);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ComponentWithApollo {...modifiedPageProps} />
      </ThemeProvider>
    );
  }
}

export default CustomApp;
