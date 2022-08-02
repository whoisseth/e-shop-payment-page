import Navbar from '../components/Navbar'
import classnames from 'classnames'
import autoAnimate from '@formkit/auto-animate'

// react icons

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsTruck } from 'react-icons/bs'
import { IoCartOutline } from 'react-icons/io5'
import { HiOutlineTruck } from 'react-icons/hi'
import Image from 'next/image'
// payment images
import payPal from '../public/images/payment/payPal.png'
import visa from '../public/images/payment/visa.png'
import mastercard from '../public/images/payment/mastercard.png'
import maestro from '../public/images/payment/maestro.png'
import discover from '../public/images/payment/discover.png'
// delivery images
import inpost from '../public/images/delivery/inpost.png'
import dpd from '../public/images/delivery/dpd.png'
import dhl from '../public/images/delivery/dhl.png'
import fedex from '../public/images/delivery/fedex.png'
// tshirt images
import tshirt1 from '../public/images/tshirt/tshirt1.png'
import tshirt2 from '../public/images/tshirt/tshirt2.png'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <main className="px-6  pb-12">
          <ShoppingAndPayment />
          <section className="flex justify-between  mb-16">
            <LoginSingUp />
            <PaymentAndDeliveryMethod />
            <YourCart />
          </section>
          <section className="flex justify-between items-center">
            <BackButton />
            <FinalPayButtons />
          </section>
        </main>
      </div>
    </>
  )
}

function ShoppingAndPayment() {
  return (
    <div className="flex justify-between items-center   h-32 ">
      <p>Shipping and Payment</p>
      <div className="flex items-center gap-4 text-2xl  ">
        <div className="rounded-full border border-green-500 p-1">
          <IoCartOutline />
        </div>
        <div className="h-[2px]  rounded-full  bg-gray-300 w-16" />
        <div className="rounded-full border text-white  bg-green-500 border-green-500 p-1">
          <HiOutlineTruck />
        </div>
      </div>
    </div>
  )
}

function LoginSingUp() {
  const inputStyle =
    ' border border-gray-300 rounded-full h-12 w-64 px-6 outline-gray-300'
  return (
    <div className="">
      <div className="space-x-6 mb-6 ">
        <button className="  bg-green-500 text-white w-32 h-12 rounded-full">
          LOG IN
        </button>
        <button className="  ring-[1px]  w ring-gray-300  w-32 h-12 rounded-full">
          SIGN UP
        </button>
      </div>

      <p className="mb-6">Shipping information</p>
      <section className="grid grid-cols-2 w-[520px] gap-5">
        <input className={inputStyle} type="email" placeholder="Email" />
        <input className={inputStyle} type="text" placeholder="Address" />
        <input className={inputStyle} type="text" placeholder="First Name" />
        <input className={inputStyle} type="text" placeholder="City" />
        <input className={inputStyle} type="text" placeholder="Last Name" />
        <input
          className={inputStyle}
          type="number"
          placeholder="Postal Code / ZIP"
        />
        <input
          className={inputStyle}
          type="number"
          placeholder="Phone number"
        />
        <select
          className={classnames(inputStyle, 'text-gray-400')}
          name=""
          id=""
        >
          <option>Poland</option>
          <option>India</option>
          <option>America</option>
        </select>
      </section>
    </div>
  )
}

function PaymentAndDeliveryMethod() {
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const paymentImages = [
    {
      img: payPal,
      height: 25,
      width: 99,
    },
    {
      img: visa,
      height: 25,
      width: 99,
    },
    {
      img: mastercard,
      height: 30,
      width: 38,
    },
    {
      img: maestro,
      height: 30,
      width: 38,
    },
    {
      img: discover,
      height: 20,
      width: 88,
    },
    {
      img: payPal,
      height: 25,
      width: 99,
    },
  ]
  const deliveryMethod = [
    {
      image: inpost,
      height: 20,
      width: 88,
      price: 20.0,
    },

    {
      image: dpd,
      height: 20,
      width: 88,
      price: 20.0,
    },

    {
      image: dhl,
      height: 20,
      width: 88,
      price: 20.0,
    },
    {
      image: fedex,
      height: 20,
      width: 88,
      price: 20.0,
    },
  ]
  const [paymentIndex, setPaymentIndex] = useState(0)
  const [deliverytIndex, setDeliverytIndex] = useState(0)
  return (
    <div className="flex flex-col gap-8">
      <section>
        <p className="mb-4">Payment method</p>
        <div ref={parent} className="grid grid-cols-3 gap-2  ">
          {paymentImages.map(({ img, height, width }, index) => (
            <div
              key={index}
              onClick={() => setPaymentIndex(index)}
              className={classnames(
                'flex items-center justify-center   rounded-2xl border-[1.5px] h-10 w-24 px-4  cursor-pointer',

                {
                  'border-yellow-400': paymentIndex === index,
                  'border-gray-400 opacity-50 ': !(paymentIndex === index),
                },
              )}
            >
              <Image src={img} height={height} width={width} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="mb-4">Delivery method</p>
        <div className="grid grid-cols-2 gap-2  ">
          {deliveryMethod.map(({ image, price }, index) => (
            <div
              key={index}
              onClick={() => setDeliverytIndex(index)}
              className={classnames(
                'gap-3 flex items-center justify-center   rounded-2xl  border-[1.5px]  px-4  h-12  cursor-pointer ',
                {
                  'border-yellow-400': deliverytIndex === index,
                  'border-gray-400 opacity-50 ': !(deliverytIndex === index),
                },
              )}
            >
              <div className="relative h-6  w-16  overflow-hidden   ">
                <Image src={image} />
              </div>
              <p> $ {price} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function YourCart() {
  const cart = [
    {
      image: tshirt1,
      price: 89.99,
      color: '#211311',
      item: 'T-shirt',
      type: 'Summer Vibes',
    },
    {
      image: tshirt2,
      price: 69.99,
      color: '#212315',
      item: 'Basic Slim',
      type: 'Fit T-Shirt',
    },
  ]
  return (
    <div className="pr-8 ">
      <p className="mb-4">Your cart</p>
      <div className="flex flex-col  gap-6 mb-8">
        {cart.map(({ color, image, item, price, type }, index) => (
          <div key={index} className="flex justify-between items-center w-72">
            <div className="flex gap-3 items-center">
              <div className="rounded-full overflow-hidden relative  h-12 w-12">
                <Image src={image} />
              </div>
              <div>
                <p>{item}</p>
                <p>{type}</p>
                <p className="text-gray-300">{color}</p>
              </div>
            </div>
            <p>$ {price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-[260px] items-center   rounded-full bg-gray-100 ml-6 px-8 py-4 mb-16 ">
        <p className="font-thin">Total cost </p>
        <p className="font-semibold">$159,98</p>
      </div>

      <div className="flex items-center gap-3 ml-8 ">
        <BsTruck className="text-xl" />
        <div className="w-36"> You are $30,02 away from free shipping!</div>
      </div>
    </div>
  )
}

function BackButton() {
  return (
    <button className="flex items-center gap-4 ">
      <AiOutlineArrowLeft />
      <span>Back</span>
    </button>
  )
}

function FinalPayButtons() {
  return (
    <div className="flex gap-4">
      <button className="flex items-center justify-center  rounded-full border-black border w-56 h-12">
        CONTINUE SHOPPING
      </button>
      <button className="flex items-center justify-center  rounded-full bg-green-500 text-white w-56 h-12">
        PROCEED TO PAYMENT
      </button>
    </div>
  )
}
