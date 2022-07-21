import React from "react";
import "./Footer.css";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <footer className="footer-section pt-10 mt-15">
      <div className="container mx-auto pt-10  pb-10">
        <div className="text-center">
          <img
            className="w-36 m-auto"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
          <div className="text-light">
            <p className="mb-1 mt-4 text-slate-300">
              Thanks You So Much For Visiting Cogbo Immigration VisA Website
            </p>
            <p className="text-slate-300">
              ullamcorper odio vitae eleifend ultricies lectus
            </p>
            <div className="footer-icons my-8 ">
              <a href="/#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="my-8">
            <hr className="text-slate-200 opacity-40" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 footer-info lg:px-0 px-8">
          <div className="mt-8 lg:translate-x-16">
            <h4 className="text-slate-300 font-bold text-2xl mb-3">Services</h4>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
          </div>
          <div className="mt-8 lg:-translate-x-10">
            <h4 className="text-slate-300 font-bold text-xl mb-3">
              Important Links
            </h4>
            <div className="mt-3">
              <a href="/#">About</a>
            </div>
            <div className="mt-3">
              <a href="/#">Coaching</a>
            </div>
            <div className="mt-3">
              <a href="/#">Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Pricing</a>
            </div>
          </div>
          <div className="mt-8 lg:-translate-x-20">
            <h4 className="text-slate-300 font-bold text-2xl mb-3">Contact</h4>
            <div className="text-slate-300 flex items-center">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <p>Marolien Street, no 14, 2nd floor</p>
            </div>
            <div className="text-slate-300 flex items-center">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>
                <a href="tel:62 820 1212 5050">+62 820 1212 5050</a>
              </p>
            </div>
            <div className="text-slate-300 flex items-center">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p className="mt-2">
                <a href="mailto:comgo@example.com">sohojpay@example.com</a>
              </p>
            </div>
          </div>
          <div className=" mt-8 lg:-translate-x-16">
            <h4 className="text-slate-300 font-bold text-2xl mb-3">
              Subscribe Our Newslatter
            </h4>
            <div>
              <p className="mb-1">Please Subscribe Our Newslatter,</p>
              <p>consectetur adipiscing elit. </p>
              <div className="footer-form flex items-center">
                <input type="email" placeholder="Your Email" />
                <button className="btn" type="submit">
                  <i className="fa-solid fa-angle-right ms-1 mt-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center  mt-1 mb-0 pb-4 footer-copyright ">
        Copyright &copy; {year} Sohoj Pay
      </p>
    </footer>
  );
};

export default Footer;
