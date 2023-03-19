import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import Category from "../components/Category/Category";
import Pagination from "../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const Home = () => {

  const [ data, setData ] = useState( {} );


  const [ button, setButton ] = useState( false );
  const [ likeButton, setLikeButton ] = useState( false )

  const changeButton = () => {
    setButton( !button )
  };
  const likeHendler = () => {
    setLikeButton( !likeButton )
  }

  useEffect( () => {
    fetch( "https://fakestoreapi.com/products" )
      .then( ( res ) => res.json() )
      .then( ( json ) => setData( json ) );
  }, [] );

  return (
    <>
      <Navbar />
      <Slider />
      <Category />
      <section className="container">
        <div className="row mt-5">
          {data.length ? (
            data.map( ( product, i ) => {
              return (
                <div key={i} className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="card" style={{ width: "300px" }}>
                    <Link to={"/about/" + product.id}>
                      <img
                        src={product.image}
                        className="card-img-top p-1"
                        alt="..."
                        style={{ width: "280px", height: "300px" }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title text-black">{product.title}</h5>
                      <h4 className="text-danger">{`${product.price}$`}</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <i onClick={likeHendler} className={`btn_card ${likeButton ? 'bi bi-heart-fill' : 'bi bi-heart' }  `}></i>
                        <i
                          onClick={changeButton}
                          className={` btn_card ${button ? "bi bi-bag-check" : "bi bi-bag-plus"
                            }  `}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } )
          ) : (
            <div className="wrap text-center mx-5">
              <div className="loading">
                <div className="bounceball"></div>
                <div className="text">Loading...</div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Pagination />

      <Footer />
    </>
  );
};

export default Home;
