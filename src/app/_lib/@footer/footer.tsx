import Image from 'next/image';

export default function Footer(){
    return (
        <footer className="w-full h-full p-6 flex justify-between items-center text-white">
            <div className='ml-4 mr-4'>
                <Image src={'/image/logo.svg'} alt="logo" width={100} height={100} />
                <p>Carhub 2024</p>
                <p>All Right Reserved</p>
            </div>
            <div className='grid grid-flow-col grid-rows-1 gap-8'>
                <div>
                    <h1 className=" font-bold text-2xl">About</h1>
                    <ul className=' list-none flex-col' >
                        <li>How it Worked</li>
                        <li>PartenerShip</li>
                        <li>Featured</li>
                        <li>Business Relation</li>
                    </ul>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl">Company</h1>
                    <ul className='list-none flex-col'>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Podcasts</li>
                        <li>Invite a Friend</li>
                    </ul>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl">Social</h1>
                    <ul className='list-none flex-col'>
                        <li>Discord</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}