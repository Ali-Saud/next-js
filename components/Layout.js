import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className='page-container'>
            <Nav />
            {children}   
        </div>
    )
}

export default Layout
