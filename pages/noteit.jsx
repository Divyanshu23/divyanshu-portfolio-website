import Image from 'next/image';
import React from 'react';
import NoteIt from "../public/assets/projects/noteit.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full px-10'>
      <div className='w-[100%] h-[65vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[65vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='contain'
          src={NoteIt}
          alt='NoteIt Cloud Notebook'
        />
        <div className='px-6 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NoteIt | Cloud Notebook</h2>
          <h3>React JS / Tailwind / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='text-justify'>
            NoteIt is a cloud notebook solution that allows users to create, update and delete their day-to-day notes right away in the cloud wihtout cluttering their local machines. It&apos;s that daily CRUD app where things are written and retrieved from localstorage. The app uses a full fledged database to store a user	&apos;s notes, user	&apos;s information and others. NoteIt is designed using Tailwind CSS, powered by MongoDB, has a secure authentication system using express-validator, becrypt JS and JSON web token, has it&apos;s backend written in Express js ,has a clean UI for creating, updating and deleting notes.
          </p>
          <a
            href='https://github.com/Divyanshu23/noteit-cloud-notebook'
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
                <RiRadioButtonFill className='pr-1' /> React Redux
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express JS
              </p>
              <p className='text-gray-600 py-2 px-1 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JSON Web Token
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

export default crypto;
