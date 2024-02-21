import React from 'react'

function Profile() {
  return (
<div className="flex flex-col ">
      <div>
        <a href="#">
          <img className="w-72 rounded-full border-2" src="https://avatars.githubusercontent.com/u/110444941?v=4" alt=""></img>
        </a>
      </div>
      <div className="mt-6 text-gray-400 text-xl font-light">
        <h1>
          <span></span>
        </h1>
      </div>
      <div className="mt-6 text-gray-800 text-l font-light">
        <h1>Saba Tahmasebi</h1>
      </div>
      <div className="mb-3">
        <button className="py-1 font-bold text-gray-800 bg-gray-100 mt-6 w-80 border-2 rounded-md items-center">
          Edit profile
        </button>
      </div>
      <div className="flex mb-3 space-x-1">
        <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
          </svg>
          <span className="px-1">8</span>
          <span className="pr-2">followers</span>
        </a>{" "}
        ·{" "}
        <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <span className="px-1">9</span>
          following
        </a>
      </div>
      <ul className="flex flex-col">
        <li className="flex space-x-2 items-center">
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
          </svg>
          <span>Shiraz , Iran</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile