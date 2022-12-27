import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
    return (
        <>
            <Head>
                <title>Divyanshu Gangwar | Resume</title>
                <meta
                    name='description'
                    content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[940px] w-full mx-auto py-2 px-10 pt-[120px]'>

                <a href="https://drive.google.com/file/d/1jisp5ZUyZr3JN8mIRBcpwsk25z4rkLSu/view?usp=share_link" target='_blank' rel='noreferrer' className='text-blue-500 font-semibold text-lg visited:text-purple-500 hover:text-gray-500'>Full Resume</a>

                <h2 className='text-center'>Resume</h2>
                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                    <h2 className='text-center'>Divyanshu Gangwar</h2>
                    <div className='flex'>
                        <a
                            href='https://www.linkedin.com/in/divyanshugangwar/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a
                            href='https://github.com/Divyanshu23'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={20} style={{ marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
                <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
                    <div className='hidden sm:block'>
                        <p>
                            Senior UG<span className='px-1'>@</span>IIT Kanpur{' '}
                            <span className='px-1'>|</span>{' '}Full Stack Development
                        </p>
                        <p className='text-sm'>
                            Major in Electrical Engineering{' '}<span className='px-1'>|</span>{' '}Minor in Computer Systems, English Literature
                        </p>
                    </div>
                    <div className='block sm:hidden'>
                        <p>EE @ IIT Kanpur</p>
                        <p className='text-xs'>Minor: Computer Systems, English Literature</p>
                        <p className='text-sm'>Full Stack Development</p>
                    </div>
                </div>

                <div className='text-center py-4'>
                    <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
                    <p className='py-2 flex flex-wrap'>
                        <span className='font-bold'>Programming Languages</span>
                        <span className='px-2'>|</span>Javascript
                        <span className='px-2'>|</span>Java
                        <span className='px-2'>|</span>Python
                        <span className='px-2'>|</span>C++
                    </p>
                    <p className='py-2 flex flex-wrap'>
                        <span className='font-bold'>Technical Skills</span>
                        <span className='px-2'>|</span>Full Stack Development
                        <span className='px-2'>|</span>Next.js
                        <span className='px-2'>|</span>React
                        <span className='px-2'>|</span>Redux
                        <span className='px-2'>|</span>MongoDB
                        <span className='px-2'>|</span>Tailwind
                        <span className='px-2'>|</span> RestAPI
                    </p>
                </div>

                <h5 className='text-center underline text-[18px] py-4'>
                    Work Experience
                </h5>

                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            AMAZON
                        </span>
                        <span className='px-2'>|</span>Bangalore, IN
                    </p>
                    <p className='py-1 italic'>SDE Intern (May,22 - July,22)</p>
                    <p className='py-1 italic'>Address and Relationship Experience Team</p>
                </div>

                <h5 className='text-center underline text-[18px] py-4'>
                    Leadership & Management
                </h5>

                <div className='py-3'>
                    <p className='italic'>
                        <span className='font-bold'>Academics and Career Council, IIT Kanpur</span>
                    </p>
                    <p className='py-1 italic'>Associate Head, (March, 22 - Present)</p>
                </div>
                <div className='py-3'>
                    <p className='italic'>
                        <span className='font-bold'>Counselling Service, IIT Kanpur</span>
                    </p>
                    <p className='py-1 italic'>Academic Mentor, Mathematics, (July, 20 - May, 21)</p>
                </div>
                <div className='py-3'>
                    <p className='italic'>
                        <span className='font-bold'>Students	&apos; Gymkhana, IIT Kanpur</span>
                    </p>
                    <p className='py-1 italic'>Senator, UG19 Batch, (Jan, 20 - Dec, 20)</p>
                </div>
            </div>
        </>
    );
};

export default resume;
