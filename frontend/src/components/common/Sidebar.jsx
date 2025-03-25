import React, { useContext } from 'react';
import { AuthContext } from '../backend/context/Auth';

const Sidebar = () => {

    const{logout}=useContext(AuthContext);
    return (
        <div>
            <div className="card shadow border-0">
                <div className="card-body p-4 sidebar">
                    <h4>Dashboard</h4>
                    <ul>
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Article</a></li>
                        <li>
                            <button onClick={logout} className='btn btn-danger mt-4'>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;