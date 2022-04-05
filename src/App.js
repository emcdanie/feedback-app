import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Card from "./components/shared/Card"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from './components/FeedbackForm'
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from './components/AboutIconLink'

function App(){
  return (
  <FeedbackProvider>
    <Router>
     <Header />
       <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
              <Card>
                <NavLink to="/" activeClassName="active">
                    Home
                    </NavLink>  
                    <NavLink to="/about" activeClassName="active">
                    About
                    </NavLink>  
              </Card>
          <AboutIconLink />
        </div>
   </Router>
   </FeedbackProvider>
    )
}
export default App