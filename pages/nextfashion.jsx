import Image from 'next/image';
import React from 'react';
import NextFashion from "../public/assets/projects/nextfashion_checkout.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full px-10'>
      <div className='w-[100%] h-[65vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[65vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='contain'
          src={NextFashion}
          alt='nextfashion e commerce store'
        />
        <div className='px-6 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NextFashion | E Commerce Store</h2>
          <h3>Next.js / Tailwind / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='text-justify'>
            NextFashion is a name given by me to this E Commerce store. The app is built exclusively using Next.js with MongoDB as it&apos;s database. It&apos;s a stand alone full stack app with no external APIs. The app is designed using Tailwind CSS, behaves as per the viewport,has a secured user authentication system using Crypto.js and JSON web token, allows users to view and buy products, allows admin to add,update,delete products from database, has a system for push notifications using react-toastify package.
          </p>
          <a
            href='https://github.com/Divyanshu23/nextjs-ecommerce-store'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='flex lg:flex-col justify-evenly flex-wrap items-center'>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Redux
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JSON Web Token
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Crypto.js
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
