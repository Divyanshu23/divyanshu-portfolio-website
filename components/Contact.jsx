import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/me2.jpg';

const Contact = () => {

  const scrollToTop = (e) => {
    document.body.scrollIntoView({behavior: "smooth",});
  }

  return (
    <div id='contact' className='w-full px-10'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest font-semibold uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-8 justify-items-center items-center'>
          {/* left */}
          <div className='col-span-2 sm:col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full flex flex-col sm:flex-row justify-center items-center lg:flex-col'>
              <div className='relative w-2/5'>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='divyanshu-gangwar'
                />
              </div>
              <div>
                <h2 className='py-8 text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl px-2'>Divyanshu Gangwar</h2>
              </div>
              <div>
                <p className='uppercase pt-8 text-center text-sm sm:text-xl md:text-2xl lg:text-5xl px-2'>Connect With Me</p>
                <div className='flex items-center justify-between py-4 space-x-2'>
                  <a
                    href='https://www.linkedin.com/in/divyanshugangwar/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a
                    href='https://github.com/Divyanshu23'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <a href="mailto:gangwardivyanshu23@gmail.com">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>

                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='flex justify-center py-12'>
          <a onClick={scrollToTop}>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
