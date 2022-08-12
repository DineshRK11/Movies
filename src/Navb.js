import { Link } from 'react-router-dom';

const Navb = () => {
    return (
        <div className="nav-content">
            <h1>zen movies</h1>
            <div>
            <Link to="/">Home</Link>
            <Link to="/addMovie">Add new Movies</Link>
            </div>
        </div>
    );
}
export default Navb;









