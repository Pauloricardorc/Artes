'use client'

import { ArteProps } from '@/types/ArteProps'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function RecenteArtes() {
  const [artes, setArtes] = useState<ArteProps[]>()

  useEffect(() => {
    async function getArtes() {
      axios
        .get('http://localhost:3333/artes')
        .then((response) => setArtes(response.data))
    }
    getArtes()
  }, [])
  return (
    <div className="w-screen h-screen p-6">
      <div className="flex flex-col w-full h-full p-6 bg-zinc-800 rounded-xl">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">Todas as artes recentes</p>
          <span className="text-sm text-gray-400">
            Todas as artes com melhor avaliação estão aqui nessa lista
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="flex flex-col w-56 h-auto border-4 border-zinc-700 rounded-xl overflow-hidden shadow-lg shadow-zinc-950 cursor-pointer"
          >
            <Image
              src="https://cdn.dribbble.com/userupload/10919423/file/original-ac87b5687ab20ea5d19a052ba52dc853.png?resize=1024x768"
              alt=""
              width={200}
              height={200}
              style={{ width: '100%', objectFit: 'cover' }}
            />
            <div className="flex flex-col items-center p-2 gap-2 bg-white">
              <span className="text-xl font-semibold text-gray-900">
                Titulo
              </span>
              <p className="text-base text-gray-700 font-medium text-center">
                Arte feita no dia 25/10/2021 para um site de exposição
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
