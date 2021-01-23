import Link from "./components/Link"
const Navbar = () => {
    return <>
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper container">
                    <a href="#!" class="brand-logo">Logo</a>
                    <ul class="right hide-on-med-and-down">
                        <Link name="Google" url="google.com" /> 
                        <Link name="Facebook" url="fb.com" /> 
                    </ul>
                </div>
            </nav>
        </div>
    </>
}
export default Navbar