import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../../../public/assets/Footer/1.png";

const Footer = () => {
  return (
    <footer className="bg-[#123557] text-gray-300 py-6 px-4  bottom-0 w-[100%] mt-5">
      <div className="container mx-auto flex flex-wrap justify-around items-center gap-5 ">
        <div className="line h-[1px] w-[85%] bg-slate-700 m-5"></div>
        <div className="flex flex-row gap-10 space-x-4 sm:flex-col ">
          <div className="mb-4 md:mb-0 flex flex-col justify-center gap-4">
            <img src={Logo} alt="" className="" />
            <p className="text-sm">© R Singhania</p>
          </div>
          <div className="subfooter flex flex-col">
            <h4 className="font-bold mb-2">Company</h4>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </div>
          <div className="subfooter flex flex-col">
            <h4 className="font-bold  mb-2">Terms</h4>
            <a href="/privacy" className="hover:underline">
              Data Privacy
            </a>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/accessibility" className="hover:underline">
              Accessibility
            </a>
          </div>
          <div className="subfooter flex flex-col">
            <h4 className="font-bold  mb-2">Related</h4>
            <a href="/Buyer" className="hover:underline">
              Find Buyer
            </a>
            <a href="/Feedback" className="hover:underline">
              Feedback
            </a>
          </div>
        </div>
        <div className="flex space-x-6 mt-4">
          <a
            href="https://linkedin.com"
            className="hover:text-white border-[#ffffff1a] border-[0.5px] p-2 rounded-full "
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-white border-[#ffffff1a] border-[0.5px] p-2 rounded-full "
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            className="hover:text-white border-[#ffffff1a] border-[0.5px] p-2 rounded-full "
          >
            <FaFacebookF />
          </a>
          <a
            href="https://insgram.com"
            className="hover:text-white border-[#ffffff1a] border-[0.5px] p-2 rounded-full "
          >
            <FaInstagram />
          </a>
        </div>
        <div className="line h-[1px] w-[85%] bg-slate-700 m-5"></div>
      </div>
    </footer>
  );
};

export default Footer;
