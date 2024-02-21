import React, { useEffect, useState } from 'react'
import Repositories from '../components/Repositories'
import { Octokit } from "octokit";

function Overview() {
    const[items ,setItems] =useState([])
    useEffect(() =>{
        const fetchRepos = async () => {
            const octokit = new Octokit({ 
        auth: `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`,
        });

        const {
            data: { login  },
          } = await octokit.rest.users.getAuthenticated();

          const repos =  await octokit.request('GET /users/{username}/repos', {
            username: login ,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            },
          });
          setItems(repos.data);
          console.log(repos);
        };
        fetchRepos();
    }, []);
 return (
    <div className="container">
    <div className="flex justify-between mb-2 px-2">
      <div className="">
        <span>Popular Repositories</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) =>(
      <Repositories
      key={item.id}
      html_url={item.html_url}
      name={item.name}
      language={item.language}
       />
      ))}
    </div>
  </div>
  )
}

export default Overview