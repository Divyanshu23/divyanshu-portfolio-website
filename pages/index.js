import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Divyanshu Gangwar | Home</title>
        <meta name="description" content="Divyanshu Gangwar is an undergraduate student at Indian Institute of Technology, KANPUR. Proficient in Next.js, React.js, Node.js, Express.js, Tailwind CSS, Mongo DB. He has previosuly interned at Amazon India. He also has knowledge of Computer Systems and Network." />
        <meta name="keywords" content="divyanshu gangwar, nextjs, reactjs, nodejs, expressjs, tailwind css, Javascript, Java"/>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* <link rel="icon" href="/fav.png" /> */}
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
