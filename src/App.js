import { Provider } from 'react-redux';

import store from './lib/redux';

//import InboxScreen from './components/InboxScreen';
import Banner from './components/Banner';

import './index.css';


function App(){
  return (
  <div>
    <Banner/>
    <Provider store={store}>
      {/*<InboxScreen />*/}
    </Provider>
  </div>
  );
}

export default App;