import { Artes } from '@/components/artes'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import Halloween from '@/assets/halloween.gif'
import Cathalloween from '@/assets/cathalloween.png'
import Halloween2 from '@/assets/halloween2.jpg'
import { RadioGroupArtes } from '@/components/radioGroup'

export default function Home() {
  const DATA = [
    { id: '1', titulo: 'HalloWeen1', votos: 200, image: Halloween },
    { id: '2', titulo: 'HalloWeen2', votos: 100, image: Cathalloween },
    { id: '3', titulo: 'HalloWeen3', votos: 130, image: Halloween2 },
  ]
  return (
    <div className="grid grid-cols-1 xl:grid-cols-app p-6 gap-6 min-h-screen">
      <div className="flex flex-1 flex-col h-auto xl:h-full bg-zinc-900 rounded-2xl p-6 justify-between">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-wrap xl:flex-nowrap w-4/5 xl:w-3/4 h-full gap-10 py-8">
            <RadioGroupArtes data={DATA} />
          </div>
        </div>
        <Footer />
      </div>
      <div className="flex flex-col bg-zinc-900 rounded-2xl p-6 gap-8 items-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl">Arte Recente</p>
          <span className="text-gray-300 text-sm font-semibold text-center">
            Aqui está a arte com melhor avaliação do mês passado.
          </span>
        </div>
        <Artes image={Halloween} />
        <button className="p-4 border rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-500">
          Todas as artes
        </button>
      </div>
    </div>
  )
}
