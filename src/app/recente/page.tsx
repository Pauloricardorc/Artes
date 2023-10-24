'use client'

import { ArteProps } from '@/types/ArteProps'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

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
        <div className="flex items-start gap-4">
          <Link href="/">
            <ArrowLeftCircle size={36} />
          </Link>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold">Todas as artes recentes</p>
            <span className="text-sm text-gray-400">
              Todas as artes com melhor avaliação estão aqui nessa lista
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {artes?.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="relative flex flex-col w-64 h-auto border-4 border-zinc-700 rounded-xl overflow-hidden shadow-lg shadow-zinc-950 cursor-pointer"
            >
              <Image
                src={art?.image || ''}
                alt=""
                width={200}
                height={200}
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <div className="w-full flex flex-col items-center p-2 gap-2 bg-white">
                <span className="text-lg font-semibold text-zinc-700 tracking-wide">
                  {art.titulo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
