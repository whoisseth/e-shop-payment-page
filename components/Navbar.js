import logo from '.././public/images/logo.png'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'
import { BiUser } from 'react-icons/bi'
export default function Navbar() {
  return (
    <div className="px-6 h-28 border-b-2 flex items-center justify-between mx-4">
      <Logo />
      <Links />
      <Tools />
    </div>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image src={logo} height={43} width={52} />
      <p className="text-lg font-medium">
        <span className="text-yellow-500">E-</span>
        <span className="">Shop</span>
      </p>
    </div>
  )
}

function Links() {
  return (
    <div className="flex items-center gap-16">
      <a href="#">Men</a>
      <a href="#"> Women</a>
      <a href="#">Kids</a>
    </div>
  )
}

function Tools() {
  return (
    <div className="flex items-center gap-6 text-2xl">
      <AiOutlineSearch className="cursor-pointer" />
      <IoCartOutline className="cursor-pointer" />
      <BiUser className="cursor-pointer" />
    </div>
  )
}
