import { NavigationContainer } from '@react-navigation/native';
// Redux Store
import store from './Src/utils/store';
import { Provider } from 'react-redux';
// App root router
import RootRouter from './Src/RootRouter'
import Toast from 'react-native-toast-message';
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
      <RootRouter />
      <Toast />
      </NavigationContainer>
    </Provider>

  );

};

