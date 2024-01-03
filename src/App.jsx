import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    // Redux Provoider
    <Provider store={store}>
      <div className='bg-secondary-subtle'>
      {/* Header */}
      <header className="bg-primary text-center">
        <h1>Cart</h1>
      </header>
      {/* Context API provoider */}
        <Products />
    </div>
    </Provider>
  )
};

export default App