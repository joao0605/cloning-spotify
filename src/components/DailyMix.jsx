import Image from 'next/image'



export default function DailyMix(props){
    


    return (
        <a href='' className='bg-white/5 p-2  rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image width={104} className='w-full' height={104} src="/album.jpg" alt="Capa album" />
        <strong className='font-semibold'>Daily mix {props.num}</strong>
        <span className='text-sm text-zinc-500'>Kanye West, Travis Scott, Veigh and more</span>
      </a>
    )
}