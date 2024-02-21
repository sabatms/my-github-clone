import React from 'react'

function Repositories(props) {
  return (
    <div>
        <div className="rounded-lg p-4 border-2">
        <div className="flex justify-between mb-8">
          <a href={props.html_url} className="font-semibold text-blue-500 text-sm hover:underline">
            {props.name}
          </a>
          <span className="border px-2 rounded-xl text-sm font-semibold text-gray-500">
            {props.visibility}
          </span>
        </div>
        <div className="flex justify-left items-center">
          <span className="mr-2 h-3 w-3 bg-yellow-300 rounded-full"></span>
          <span className="font-thin text-md text-gray-500 ">
            {props.language}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Repositories