import Navbar from "./Navbar"
//import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <div className='page-container'>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
