import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import NextFashion from "../public/assets/projects/nextfashion.png"
import NoteIt from "../public/assets/projects/noteit.png"
import News from "../public/assets/projects/news_app.png"
import Spaces from "../public/assets/projects/spaces.png"
// import TextUtility from "../public/assets/projects/textutility.png"

const Projects = () => {
  return (
    <div id='projects' className='w-full px-10'>
      <div className='max-w-[1280px] mx-auto py-16'>
        <p className='text-xl tracking-widest font-semibold uppercase text-[#5651e5] mb-6'>
          Work Experience & Projects
        </p>

        <div className='flex justify-center items-center mb-8'>
          <div className='relative flex items-center justify-center h-[27rem] sm:h-[36rem] w-full md:w-[55%] lg:w-[42%] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src="/assets/projects/me_amazon.jpg" alt='Divyanshu_Amazon' layout='fill' sizes="100vw" style={{ objectFit: 'contain' }} />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center w-full'>Amazon SDE Intern</h3>
              <p className='pb-4 pt-2 text-white text-center'>JAVA</p>
              <Link href='/intern'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Spaces'
            backgroundImg={Spaces}
            projectUrl='/spaces'
            tech='Next.js'
          />

          <ProjectItem
            title='NextFashion'
            backgroundImg={NextFashion}
            projectUrl='/nextfashion'
            tech='Next.js'

          />
          <ProjectItem
            title='NoteIt Cloud Notebook'
            backgroundImg={NoteIt}
            projectUrl='/noteit'
            tech='React.js'

          />
          <ProjectItem
            title='News Frontend App'
            backgroundImg={News}
            projectUrl='/news-frontend-app'
            tech='React.js'

          />

          {/* <ProjectItem
            title='Text Utility App'
            backgroundImg={TextUtility}
            projectUrl='/textutility'
            tech='React.js'
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
