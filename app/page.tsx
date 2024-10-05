'use client'

import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import { useEffect } from "react";

const axios = require('axios')

export default function Home() {


  return (

    <div className="flex justify-center items-center w-full h-screen">
      <form action="" className="flex flex-col gap-2 w-[90%] md:w-80 text-sm">
        <h1 className="font-bold text-lg">Simple Form</h1>
        <label htmlFor="first_name" >First Name</label>
        <input type="text" name="first_name" id="first_name" className="block py-1 px-1 border" />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" name="last_name" id="last_name" className="block py-1 px-1 border" />
        <label htmlFor="phon_number">Phone Number</label>
        <input type="number" name="phone_number" id="phone_number" required className="block py-1 px-1 border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="block py-1 px-1 border" />

        <input type="submit" value="Submit" className="border py-1 px-1" />
      </form>
    </div>

  );
}
