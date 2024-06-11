import Image from 'next/image'

export default function Nav(){
    return (
        <nav className='flex h-5 w-full p-10 flex items-center justify-between text-white'>
            <Image src={'/image/logo.svg'} alt="logo" width={100} height={100} />
            <button className='text-violet-700 bg-white drop-shadow-sm shadow-black pr-6 pl-6 pt-4 pb-4 rounded-3xl'>
                Sign in
            </button>
        </nav>
    )
}