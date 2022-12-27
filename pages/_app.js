import Navbar from '../components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, [])

  return (
    <>
      <LoadingBar
        color='#5651e5'
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
