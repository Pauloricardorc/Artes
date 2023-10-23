'use client'

import { ArteProps, ReentArts } from '@/types/ArteProps'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Artes } from '@/components/artes'
import { Header } from '@/components/header'
import { Progress } from '@/components/progress'
import { RadioGroupArtes } from '@/components/radioGroup'
import Link from 'next/link'

export default function Home() {
  const [selected, setSelected] = useState<ArteProps>()
  const [recentArt, setRecentArt] = useState<ReentArts>()
  const [arte, setArte] = useState<ArteProps[]>()

  function handleNewArte() {
    console.log(selected)
    if (selected) {
      axios.post('http://localhost:3333/recenteArtes', {
        selected,
      })
    } else {
      alert('Nenhuma arte foi selecionada')
    }
  }

  useEffect(() => {
    async function getRecentArts() {
      axios
        .get('http://localhost:3333/recenteArtes')
        .then((e) => setRecentArt(e.data))
    }
    getRecentArts()
  }, [])

  useEffect(() => {
    async function getArtes() {
      axios.get('http://localhost:3333/artes').then((e) => setArte(e.data))
    }
    getArtes()
  }, [])

  return (
    <div className="grid grid-cols-1 xl:grid-cols-app p-6 gap-6 min-h-screen">
      <div className="flex flex-1 flex-col h-auto xl:h-full bg-zinc-900 rounded-2xl p-6 justify-between">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-wrap xl:flex-nowrap w-4/5 xl:w-3/4 h-full gap-10 py-8">
            <RadioGroupArtes
              data={arte}
              radioSelected={(value) => setSelected(value[0])}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-lg font-semibold">Tempo de votação</p>
            <Progress />
            <span className="text-gray-400">
              O tempo de votação vai no haip
            </span>
          </div>
          <button
            onClick={() => handleNewArte()}
            className="border py-4 px-6 hover:bg-blue-600 rounded-xl text-xl transition duration-500 drop-shadow-2xl"
          >
            Votar!
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-900 rounded-2xl p-6 gap-8 items-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl">Arte Recente</p>
          <span className="text-gray-300 text-sm font-semibold text-center">
            Aqui está a arte com melhor avaliação do mês passado.
          </span>
        </div>
        <div className="flex flex-1">
          <Artes image={recentArt?.selected.image} />
        </div>
        <Link
          href="recente"
          className="p-4 border rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-500"
        >
          Todas as artes
        </Link>
      </div>
    </div>
  )
}
