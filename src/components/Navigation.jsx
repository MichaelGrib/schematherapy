import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
      <div className="mx-auto  w-full">
        <nav className="bg-blue-600 p-4 w-full shadow-md">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="font-normal text-slate-200">Схемы</Link>
            </li>
            <li>
              <Link to="/needs" className="font-normal text-slate-200">Потребности</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navigation;