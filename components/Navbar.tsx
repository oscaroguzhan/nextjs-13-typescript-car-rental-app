import Link from "next/link"
import Image from "next/image"
import  CustomButton  from "./CustomButton"
const Navbar = () => {
  return (
    <header className="w-full max-w-screen-xl mx-auto p-4 md:py-8 bg-[#fafafa]">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6 sm:px-16">
        <Link href="https://codeguruozzy.com" className="flex justify-center items-center">
          <Image src="/ozzylogo.png" alt="nav-logo" width={120} height={20} className="object-contain"/>
        </Link>
        <div className="flex">
        <CustomButton 
        title='Sign in'
        containerStyle=' underline pointer text-[var(--white)] bg-black outline-none rounded-full hover:bg-[var(--purple)]'
        btnType="button"
        />
        </div>
      </nav>
    </header>
  )
}

export default Navbar