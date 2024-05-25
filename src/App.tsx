// Hooks
import { useTheme } from '@/hooks/useTheme';

// Components
import Header from '@/components/Header';
import Landing from '@/components/Home/Landing';
import About from '@/components/Home/About';

function App() {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className='dark:bg-zinc-900 bg-zinc-300 text-zinc-600 dark:text-zinc-300 flex flex-col h-screen scroll-smooth animate-fadeIn'>
      <div className='snap-start'>
        <Header />

        <Landing />
      </div>

      <About />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
