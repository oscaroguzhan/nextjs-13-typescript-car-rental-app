import Image from "next/image"
import Link from 'next/link'

const Footer = () => {
  return (
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="https://codeguruozzy.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src="/ozzylogo.png" width={80} height={40} className="object-contain mr-3"  alt="footer Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeGuruOzzy</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Linkedin</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 ">GitHub</Link>
                </li>
                <li>
                    <Link href="mailto:oscar.w.ergun@gmail.com" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://codeguruozzy.com/" class="hover:underline">CodeGuruOzzy™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer