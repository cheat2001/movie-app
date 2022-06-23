import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/solid'
export default function Header() {
  return (
    <div>
       <div className="">
           <HeaderIcon Icon={HomeIcon} title="HOME"/>
           <HeaderIcon Icon={UserIcon} title="Account"/>
           <HeaderIcon Icon={PhoneIcon} title="Contact"/>
           <HeaderIcon Icon={InformationCircleIcon} title="About"/>
       </div>
       <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
       width={100}
        height={50}
       />
    </div>
  )
}
