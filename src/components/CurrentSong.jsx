import Image from 'next/image'
export default function CurrentSong(){

    return (
        <div className='flex items-center gap-3'>
          <Image width={56} height={56} src="/album.jpg" alt="Capa album" />

          <div className='flex flex-col'>
            <strong className='font-normal'> Flashing Lights</strong>
            <span className='text-xs text-zinc-400'>Kanye West</span>
          </div>
        </div>
    )
}