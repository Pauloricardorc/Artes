'use client'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface Props {
  image: string | StaticImageData
}

export function Artes({ image }: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="relative flex w-full h-cardResponsive xl:h-full rounded-md 
      xl:rounded-full overflow-hidden cursor-pointer
      group-aria-checked:border-4 border-blue-600 group-aria-checked:transition-all duration-200
      "
    >
      <Image
        src={image}
        alt=""
        className="rounded-md xl:rounded-full"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <div className="absolute flex flex-col h-2/5 w-full bg-white bottom-0 left-0 bg-opacity-20 backdrop-blur-sm items-center justify-evenly p-6">
        <p
          className="text-3xl font-semibold text-textShadow"
          style={{ textShadow: '0px 0px 6px #000' }}
        >
          Halloween festival
        </p>
        <div className="flex xl:flex-col gap-4">
          <span className="text-base font-bold bg-white rounded-md text-gray-900 p-2">
            123 Votos
          </span>
        </div>
      </div>
    </motion.div>
  )
}
