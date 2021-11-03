import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './src/Navigations';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <NavigationContainer>
          <StackNavigation />
        </NavigationContainer> */}
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
