import './App.css'
import Layout from './components/Layout/index.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes.jsx';

function App() {
  const error = false;

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {error ? (
              <>
                {/*<Route path={"/ressetPassword"} element={<ForgotPasswod />} />*/}
                {/*<Route path={"/login"} element={<LogIn />} />*/}
                {/*<Route path={"/"} element={<LogIn />} />*/}
              </>
            ) : (
              <>
                {/*<Route path={"/ressetPassword"} element={<ForgotPasswod />} />*/}
                {/*<Route path={"/login"} element={<LogIn />} />*/}
                <Route element={<Layout />}>
                  {routes?.map(({ path, component }, index) => (
                    <Route path={path} element={component} key={index} />
                  ))}
                </Route>
                {/*<Route path={"/"} element={<LogIn />} />*/}
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>

      {/* <AlertLoading isOpen={!isLoading} isError={error} message={error ? error : "success"} /> */}
    </>
  )
}

export default App
