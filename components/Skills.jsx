import Image from 'next/image';
import React from 'react';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Redux from "../public/assets/skills/redux.png"
import Express from "../public/assets/skills/express.png"
import Mongo from "../public/assets/skills/mongo.png"
import Java from "../public/assets/skills/java.png"
import Git from "../public/assets/skills/git.png"

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 px-10'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest font-semibold uppercase text-[#5651e5]'>
          Skills
        </p>
        <h3 className='py-4 text-lg'>Technologies I am Versed With</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-items-center items-center'>
              <div className='m-auto'>
                <Image src={Redux} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>React Redux</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Express} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Mongo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>MongodDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Java} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-items-center items-center'>
              <div className='m-auto'>
                <Image src={Git} width='100px' height='50px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-xs sm:text-sm md:text-xl'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
