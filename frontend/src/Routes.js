import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminProduct from './pages/Admin/Product'
import LayoutAdmin from './layout/Admin'
import LayoutWebsite from './layout/Website'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import Error404 from './pages/404'
import ContactPage from './pages/ContactPage'
import AllRoomPage from './pages/AllRoomPage'


const Routers = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/admin/:path?">
                        <LayoutAdmin>
                            <AdminProduct />
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite>
                            <Switch>
                                <Route exact path="/">
                                    <HomePage />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route exact path="/contact">
                                    <ContactPage />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route exact path="/allroom">
                                    <AllRoomPage />
                                </Route>
                                <Route path="*">
                                    <Error404 />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Routers