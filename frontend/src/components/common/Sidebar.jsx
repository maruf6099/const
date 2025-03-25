import React from 'react';

const Sidebar = () => {
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
                        <li><button className='btn btn-danger mt-4'>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;