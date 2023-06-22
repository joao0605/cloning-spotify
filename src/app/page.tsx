import { ChevronLeft, ChevronRight} from 'lucide-react'
import Album from '../components/Album'
import DailyMix from '../components/DailyMix'
import CurrentSong from '../components/CurrentSong'
import Player from '../components/Player'
import Controllers from '../components/Controllers'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className='flex items-center gap-2'>

            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <NavBar/>
          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-4'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Today's hits</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil 50</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Mix Relax</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Mix Hip Hop</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />

          </div>
          <h2 className='font-semibold text-2xl mt-10'>Made for João Pedro Fernandes</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <DailyMix num={1} />
            <DailyMix num={2} />
            <DailyMix num={3} />
            <DailyMix num={4} />
            <DailyMix num={5} />
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t flex items-center justify-between px-6 py-4 border-zinc-700 p-6">
        <CurrentSong/>

        <Player/>
        
        <Controllers/>
        
      </footer>
    </div>
  )
}
