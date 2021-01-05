import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import './App.css';
import NavContainer from './components/NavContainer/NavContainer';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="App">
        <NavContainer />      
      </div>
    </AppProvider>
  );
}

export default App;
