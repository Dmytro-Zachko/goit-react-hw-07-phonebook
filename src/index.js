import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppH } from 'components/AppH';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

// const App = () => {
//   const selector = useSelector(state => state.MyValue)
//   const dispatch = useDispatch()
//   return (
//     <>
//     <div> {selector} </div>
//       <button onClick={() => dispatch(increment(100))}>Increment</button>
//       <button onClick={() => dispatch(decrement(100)) }>decrement</button>
//       </>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
        <AppH />
    </Provider>
  </React.StrictMode>
);
