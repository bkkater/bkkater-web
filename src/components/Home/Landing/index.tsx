import { Github, Linkedin } from 'lucide-react';

// Hooks
import { useTheme } from '@/hooks/useTheme';

// Assets
import IllDev from '@/assets/illustration-dev.png';
import IllLigthDev from '@/assets/illustration-dev-ligth.png';

function Landing() {
  const { isDarkTheme } = useTheme();

  return (
    <div
      id='#home'
      className='container flex justify-between items-center m-auto relative py-28'
    >
      <div className='-translate-y-28'>
        <span className='text-2xl tracking-widest dark:font-thin font-light '>
          BIANCA MEDEIROS
        </span>

        <h1 className='dark:text-teal-400 text-orange-500  text-8xl'>
          <span className='flex gap-4'>
            DEV
            <span className='dark:bg-teal-500 bg-orange-500 text-xl text-zinc-300 rounded-full my-auto w-10 h-10 flex items-center justify-center'>{`</>`}</span>
          </span>
          FRONT-END
        </h1>
      </div>

      <img src={isDarkTheme ? IllDev : IllLigthDev} loading='eager' />

      <div className='absolute bottom-20 left-0 flex gap-8'>
        <a
          href='https://www.linkedin.com/in/bkkater/'
          target='_blank'
          className='w-12 h-12 flex items-center justify-center dark:bg-zinc-800 bg-zinc-200 rounded-lg transition-all hover:scale-110 shadow'
        >
          <Linkedin size={22} className='dark:text-orange-500 text-sky-950' />
        </a>

        <a
          href='https://github.com/bkkater'
          target='_blank'
          className='w-12 h-12 flex items-center justify-center dark:bg-zinc-800 bg-zinc-200 rounded-lg transition-all hover:scale-110 shadow'
        >
          <Github size={22} className='dark:text-orange-500 text-sky-950' />
        </a>
      </div>
    </div>
  );
}

export default Landing;
