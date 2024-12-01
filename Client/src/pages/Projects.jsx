import React from 'react'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-6xl font-bold">Projects</h1>
      <p className="text-2xl text-gray-600 mt-4">
        Below are some of the projects I have worked on. You can find more of my
        projects on my GitHub.
      </p>
      <a
        className="mt-8 text-lg text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
        href="https://github.com/Rehan1908"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github mr-2"></i>
        Rehan1908
      </a>
    </div>
  )
}
