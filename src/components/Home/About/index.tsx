import Lottie from 'lottie-react';

// Assets
import IllReact from '@/assets/illustration-react.png';
import AnimPenguin from '@/assets/lottie/penguin.json';
import ImgMe from '@/assets/me.png';

function About() {
  return (
    <div id='#about' className='dark:bg-zinc-950 bg-zinc-200'>
      <div className='container mx-auto flex justify-between items-center py-20'>
        <img src={IllReact} className='h-64 -mt-20' />

        <p className='w-[600px] text-xl text-zinc-400 text-justify leading-tight'>
          As a{' '}
          <b className='text-teal-500 dark:text-orange-400 font-semibold'>
            Front-end Developer
          </b>{' '}
          ased in Brazil, I have a passion for creating beautiful and functional
          user interfaces. I'm currently working at{' '}
          <a
            href='https://dotlib.com/'
            className='decoration-solid dark:text-teal-500 text-orange-400 font-semibold'
          >
            Dotlib
          </a>{' '}
          and studying Information Systems at{' '}
          <a
            href='https://portal1.iff.edu.br/'
            className='decoration-solid dark:text-teal-500 text-orange-400  font-semibold'
          >
            Fluminense Federal Institute
          </a>
          .
        </p>

        <div className='flex'>
          <Lottie animationData={AnimPenguin} className='w-72' />

          <img
            src={ImgMe}
            className='rounded-full h-40 -translate-x-1/2 -translate-y-1/6 border-2 dark:border-gray-300 border-gray-100'
          />
        </div>
      </div>
    </div>
  );
}
//

export default About;
