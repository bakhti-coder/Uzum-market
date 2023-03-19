import React, { useEffect, useState } from "react";
import "../components/Card/SinglePage.scss";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import yulduz from "../components/Card/Logo.svg";
import Card from "../components/Card/Card";

const SinglePage = () => {
  const { id } = useParams();
  const [ product, setProduct ] = useState();
  console.log( product );
  useEffect( () => {
    const getData = async () => {
      const res = await fetch( `https://fakestoreapi.com/products/` + id );
      const data = await res.json();
      setProduct( data );
    };
    getData();
  }, [] );

  const [ counter, setCounter ] = useState( 0 )

  const btnPlus = () => {
    setCounter( counter + 1 )

  }
  const btnMinus = () => {
    if ( counter > 0 ) {
      setCounter( counter - 1 );
    }
  }
  return (
    <>
      <Navbar />
      <section className="my-5">
        <div className="container div d-flex align-items-center">
          <div className="about_img">
            <img
              src={
                product && product.image
                  ? product.image
                  : ""
              }
              className=""
              alt="..."
              style={{ width: "50%" }}
            />
          </div>
          <div className="about_deck">
            <img src={yulduz} alt="" />{" "}
            <span>5.0 ( {product && product.rating.rate ? product.rating.rate : ''} baho ) {product && product.rating.count ? product.rating.count : ''} buyurtma</span>
            <h1>{product && product.title ? product.title : ''}</h1>
            <div className="d-flex">
              <p className="text-dark">categoty:  </p>
              <p className="mx-3">{product && product.category ? product.category : ''}</p>
            </div>
            <hr />
            <div className="about__counter d-flex align-items-center input-group">
              <button onClick={btnMinus} className={` ${counter == 0 ? 'btn btn-secondary  disabled px-3 pt-2' : 'btn btn-primary px-3 pt-2 input-gtoup-text '}`}>-</button>
              <h2 className="mx-3 mt-2">{counter}</h2>
              <button onClick={btnPlus} className="btn btn-primary px-3 pt-2 input-group-text">+</button>
            </div>
            <div className="about__price d-flex align-items-center my-3">
              <p className="fs-3 mt-1">Narx:</p>
              <h4 className="mx-4 mb-2">{counter + 1 ? product && product.price ? product.price * 2 : '' : ''} $</h4>
            </div>
          </div>
        </div>
        <div className="about-deck container mt-5">
          <h1 className="text-center">Maxsulot tavsifi</h1>
          <p className="fs-5">{product && product.description ? product.description : ''}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SinglePage;
