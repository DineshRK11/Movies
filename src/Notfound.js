import {Link} from "react-router-dom"
const Notfound = () => {
    return ( 
        <div className="Notfound">
            <h1>404 : Page Not Found</h1>

            <h2>The Page You Are Looking For is Not Present.
                Go Back To Home Page.
            </h2>

            <Link to="/"> Go TO Home Page</Link>
        </div>
     );
}
 
export default Notfound;