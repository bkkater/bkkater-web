import { ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

// Assets

// Hooks
import { useTheme } from '@/hooks/useTheme';

const Header = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <div className='bg-zinc-200 border-zinc-100 dark:bg-zinc-800 border-b-2 dark:border-zinc-700'>
      <div className='container m-auto flex flex-row items-center justify-between text-sm h-16  '>
        <div className='flex gap-8 uppercase text-sm'>
          <a href='#home'>Home</a>
          <a href='#about'>About me</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex gap-12 text-sm'>
          <button className='uppercase my-auto'>Resume</button>

          <Dropdown.Root>
            <Dropdown.Trigger className='flex items-center gap-1'>
              <Globe size={16} />
              EN
              <ChevronDown size={16} />
            </Dropdown.Trigger>

            <Dropdown.Portal>
              <Dropdown.Content
                align='start'
                side='bottom'
                sideOffset={4}
                className='w-14 dark:bg-zinc-800 border dark:border-zinc-700 bg-zinc-200 border-zinc-100 rounded-b outline-nones dark:text-zinc-300'
              >
                <Dropdown.Item className='text-sm cursor-pointer dark:hover:bg-zinc-700 text-center outline-none py-2'>
                  PT
                </Dropdown.Item>

                <Dropdown.Item className='text-sm cursor-pointer dark:hover:bg-zinc-700 text-center outline-none py-2'>
                  EN
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>

          <button
            className='p-2 rounded dark:hover:bg-zinc-700 hover:bg-zinc-300 hover:scale-105 transition-all   data-[state="dark"]:hover:text-amber-100 data-[state="light"]:hover:text-teal-700'
            data-state={isDarkTheme ? 'dark' : 'light'}
            onClick={toggleTheme}
          >
            {isDarkTheme ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
