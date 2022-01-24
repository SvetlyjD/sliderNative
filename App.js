import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import {View} from 'react-native';
import {Main} from './Pages/Main';
import {createStore} from 'redux';
import {reducer} from './redux/reducers';
import {Provider} from 'react-redux';
import Slider from './Pages/Slider';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View>
          <Route exact path="/" component={Main} />
          <Route exact path="/slider" component={Slider} />
        </View>
      </NativeRouter>
    </Provider>
  );
};

export default App;
