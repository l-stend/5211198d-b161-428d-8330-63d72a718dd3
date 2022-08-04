import './App.css';
import { firebaseConfig } from './firebase-config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Browse, SingleVideo } from './pages';
import { ProtectedRoute, SharedLayout } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route path='/browse' element={<Browse />} />
            <Route path='/video' element={<SingleVideo />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default App;
