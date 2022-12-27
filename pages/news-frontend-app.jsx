import Image from 'next/image';
import React from 'react';
import News from "../public/assets/projects/news_app.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full px-10'>
      <div className='w-[100%] h-[65vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[65vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='contain'
          src={News}
          alt='/'
        />
        <div className='px-6 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>News Frontend App</h2>
          <h3>React JS / Tailwind / News API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='text-justify'>
            This is a pure frontend app that delivers latest news to its users. All of the latest headlines are delivered in various categories such General, Health, Sports, Technology, etc. App has a clean UI to naviagate acroos different  categories, has an infinite scroll functionality, is designed using Tailwind CSS keeping in midn the responsiveness. App makes external fetch requests on client side to News API to fetch and present news.
          </p>
          <a
            href='https://github.com/Divyanshu23/news-delivery-frontend-app'
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
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> News API
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Infinite Scroll
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

export default netflix;
