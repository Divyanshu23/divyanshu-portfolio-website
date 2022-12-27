import Image from 'next/image';
import React from 'react';
import AmazonLogo from "../public/assets/projects/amazon_logo.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Intern = () => {
  return (
    <div className='w-full px-10'>
      <div className='w-[100%] h-[40vh] relative flex justify-center'>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h3 className='py-2 text-5xl'>SDE Intern @ <span className='text-[#ff9900]'>Amazon</span> </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 py-2'>
        <div className='col-span-4'>
          <p>Internship</p>
          <h2>Overview</h2>
          <p className='text-justify'>
            I was the summer intern at Amazon India from May,22 to July,22 in their Global Addresses Team. With Amazon, I had one of the most uplifting work experience be it in terms of a developer or be it character and ownership. With the addresses team, I worked on features which were both customer facing and for teams	&apos;s internal use. I enabled a URI based debugging facility in Amazon&apos;s  Address forms that enabled my team for quick debigginng into issues in times of failure. I also wrote a lot of Unit Tests for a service that are being rolled out my Amazon globally. I migrated some of the team &apos;s legacy code into more recent architecture that was more secure and verbose.
          </p>
          <a
            href='https://github.com/Divyanshu23/textutils'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='flex lg:flex-col justify-evenly flex-wrap items-center'>
              <p className='text-gray-600 py-2 px-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Java
              </p>
              <p className='text-gray-600 py-2 px-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Java Spring Framework
              </p>
              <p className='text-gray-600 py-2 px-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Unit Testing using Mockito
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

export default Intern;
