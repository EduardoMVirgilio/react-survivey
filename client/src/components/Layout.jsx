import {Outlet, ScrollRestoration, useNavigation} from 'react-router'
import Loading from './Loading'

const Layout = () => {
  const {location} = useNavigation();
  const isNavigating = Boolean(location);
  return (
    <>
        {isNavigating && <Loading/>}
        <Outlet/>
        <ScrollRestoration/>
    </>
  )
}

export default Layout