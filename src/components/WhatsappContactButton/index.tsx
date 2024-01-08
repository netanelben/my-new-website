import React from 'react'
// import style from './style.module.css'
import WatzImg from './watz.png'

const W_CODE = 'ZKA7WVMPXFJJA1'

export const WhatsappContactButton = () => (
  <>
    <a href={`https://wa.me/message/${W_CODE}`} target="_blank">
      <div className="flex flex-row items-center justify-start">
        <img
          src={WatzImg}
          alt="whatsapp"
          className="rounded-[100%] w-[45px] h-[45px] z-0"
        />
        <p className="m-0 text-base font-bold text-white bg-[#24D366] px-2 py-[6px] rounded-[40px] -ml-[26px] indent-[20px] pr-3">
          WhatsApp
        </p>
      </div>
    </a>
  </>
)
