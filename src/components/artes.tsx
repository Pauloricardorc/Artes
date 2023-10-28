'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props {
  image?: string
}

export function Artes({ image }: Props) {
  if (!image) {
    return <p>Loading...</p>
  }
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="relative flex w-full h-cardResponsive xl:h-full rounded-md 
      xl:rounded-full overflow-hidden cursor-pointer group-aria-checked:border-4 border-blue-600
      "
    >
      <Image
        src={image}
        alt=""
        className="rounded-md xl:rounded-full"
        width={1200}
        height={1200}
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
