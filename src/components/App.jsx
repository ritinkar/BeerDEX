import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Main from './Main';
import 'semantic-ui-css/semantic.min.css';


const store = configureStore();


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}



export default App;
