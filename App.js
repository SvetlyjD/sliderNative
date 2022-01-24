import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import { View } from 'react-native';
import { Slider } from './Pages/Slider';
import { Main } from './Pages/Main';
import { createStore } from 'redux';
import { reducer } from "./redux/reducers"

const store = createStore(reducer);

const App = () => {

  return (
    <NativeRouter store={store}>
      <View>
        <Route exact path="/" component={Main} />
        <Route exact path="/slider" component={Slider} />
      </View>
    </NativeRouter >
  );
};

export default App;
