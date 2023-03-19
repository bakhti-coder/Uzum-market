import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

const Category = () => {

  const [ category, setCategory ] = useState()

  useEffect( () => {
    fetch( 'https://fakestoreapi.com/products/categories' )
      .then( res => res.json() )
      .then( json => setCategory( json ) )
  }, [] )


  return (
    <section>
      <div className="container mt-5">
        <div className=" d-flex justify-content-between">
          <Link> <h5 className='text-secondary'>{category && category[ 0 ]
            ? category[ 0 ]
            : ""}</h5></Link>
          <Link> <h5 className='text-secondary'>{category && category[ 1 ]
            ? category[ 1 ]
            : ""}</h5></Link>
          <Link> <h5 className='text-secondary'>{category && category[ 2 ]
            ? category[ 2 ]
            : ""}</h5></Link>
          <Link> <h5 className='text-secondary'>{category && category[ 3 ]
            ? category[ 3 ]
            : ""}</h5></Link>
        </div>
      </div>
    </section>
  )
}

export default Category