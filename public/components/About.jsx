import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me.jpg';
import { AiFillHeart } from 'react-icons/ai';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl font-semibold tracking-widest text-[#5651e5]'>
            About
          </p>
          <h3 className='py-4 text-lg'>Who I Am</h3>
          <p className='py-2 text-gray-600 text-justify'>
            Hi there, I am Divyanshu Gangwar, pursuing my major in <span className='font-semibold'>Electrical Engineering</span> from <span className='font-semibold'>Indian Institute of Technology, Kanpur (2019-23)</span> with a minor in <span className='font-semibold'>Computer Systems</span> and <span className='font-semibold'>English Literature.</span> Yes, apart from tech, I love reading Literature, keep myself updated about public affairs and governments and binge shows (<span><AiFillHeart className='inline'/> Tyrion Lannister <AiFillHeart className='inline'/> Barney Stinson</span>).
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            I am versed with both frontned and backend technologies like <span className='font-semibold'>Next.js, React.js, Express.js, MongoDB, Vanilla CSS and Tailwind CSS</span>, etc. I am also proficient in <span className='font-semibold'>Data Structures and Algorithms</span> and have been coding algorithmic problems in <span className='font-semibold'>JAVA</span>. My minor (ongoing) in Computer Systems at IIT Kanpur has enabled me to dive deep into <span className='font-semibold'>Computer Systems and Computer Networks.</span> I have done my Summer Intern with <span className='font-semibold'>AMAZON</span> working in their Global Addresses Team. During my period with Amazon, I was able to deliver impactful work adding functionality for both customer facing services and team&apos;s internal services.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Here are some of my key projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='Divyanshu Gangwar' />
        </div>
      </div>
    </div>
  );
};

export default About;
