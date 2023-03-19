import React from 'react'
import './Footer.scss'
import appStore from './images/app-store.svg'
import playMarket from "./images/playMarket.svg";

const Footer = () => {
  return (
    <footer className="container mt-5">
      <div className="footer mb-5 d-flex justify-content-between align-items-center">
        <div className="footer__haqimizda ">
          <ul>
            <h5 className='h5'>Biz haqimizda</h5>
            <li className='text-secondary' style={{fontSize: '14px'}}>Topshirish punkitlari</li>
            <li className='text-secondary' style={{fontSize: '14px'}}>Vakansiyalar</li>
          </ul>
        </div>
        <div className="footer__foydalanuvchilarga">
          <ul>
            <h5 className='h5'>Foydalanuvchilarga</h5>
            <li className='text-secondary' style={{fontSize: '14px'}}> Biz bilan bogʻlanish</li>
            <li className='text-secondary' style={{fontSize: '14px'}}>Savol-Javob</li>
          </ul>
        </div>
        <div className="footer__Tadbirkorlarga">
          <ul>
            <h5 className='h5'>Tadbirkorlarga</h5>
            <li className='text-secondary' style={{fontSize: '14px'}}>Uzumda soting</li>
            <li className='text-secondary' style={{fontSize: '14px'}}>Sotuvchi kabinetiga kirish</li>
          </ul>
        </div>
        <div className="footer__ilova">
          <ul>
            <h5 className='h5'>Ilovani yuklab olish</h5>
            <li>
              <img src={appStore} alt="" /> <span>AppStore</span>
            </li>
            <li>
              <img src={playMarket} alt="" /> <span>Google Play</span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-faq d-flex justify-content-between align-items-center flex-wrap">
        <div className="faq__text d-flex">
          <p className='fw-medium'>Maxfiylik kelishuvi</p>
          <p className='fw-medium mx-4'>Foydalanuvchi kelishuvi</p>
        </div>
        <div className="faq__texts">
          <p className='text-muted' style={{fontSize: '12px'}}>
            «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer