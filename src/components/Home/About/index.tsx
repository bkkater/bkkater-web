import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import Lottie from 'lottie-react';

// Assets
import IllReact from '@/assets/illustration-react.png';
import AnimPenguin from '@/assets/lottie/penguin.json';
import ImgMe from '@/assets/me.png';

const supabase = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_KEY ?? ''
);

type SkillsResponse = {
  name: string;
  image: string;
  id: string;
};

function About() {
  const [skills, setSkills] = useState<SkillsResponse[] | null>(null);

  async function getCountries() {
    const { data } = await supabase.from('skills').select();

    setSkills(data);
  }

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div id='#about' className='snap-start'>
      <div className='dark:bg-zinc-950 bg-zinc-200'>
        <div className='container mx-auto flex justify-between items-center py-20 h-[480px]'>
          <img src={IllReact} className='h-64 -mt-20' />

          <p className='w-[600px] text-xl text-zinc-400 text-justify leading-tight'>
            As a{' '}
            <b className='text-teal-500 dark:text-orange-400 font-semibold'>
              Front-end Developer
            </b>{' '}
            based in Brazil, I'm committed to creating user visually appealing
            and user-friendly interfaces. I'm currently working at{' '}
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

      <h2 className='text-zinc-400 text-4xl mx-auto text-center -mt-40'>
        SKILLS
      </h2>

      <div className='bg-zinc-200'>
        <div className='container flex flex-wrap justify-between h-96 '>
          {skills?.map(({ name, image, id }) => (
            <div key={id} className='flex flex-col items-center'>
              <img
                src={`${process.env.SUPABASE_URL}/storage/v1/object/public/skills/${image}`}
              />

              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
