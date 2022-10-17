import React from 'react'

export const TodoPaginator = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i= 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
        console.log(pageNumbers)
    }

  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
             <li key= {number} className = "page-item">
             <a onClick= {()=> paginate(number)} href='!#' className='page-link'>
                 {number}
             </a>
         </li>       
            ))}
        </ul>
    </nav>
  )
}