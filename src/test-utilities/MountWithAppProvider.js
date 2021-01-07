import React from 'react'
import en from '@shopify/polaris/locales/en.json'
import {createMount} from '@shopify/react-testing'
import { render } from '@testing-library/react';
import { PolarisTestProvider } from '@shopify/polaris';

export const mountWithAppProvider = createMount({
  context(options) {
    return options;
  },
  
  render(element, context) {
    return (
      <PolarisTestProvider i18n={en} {...context}>
        {element}
      </PolarisTestProvider>
    );
  }
});
