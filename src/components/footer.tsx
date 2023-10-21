import { Progress } from './progress'

export function Footer() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-2 w-full">
        <p className="text-lg font-semibold">Tempo de votação</p>
        <Progress />
        <span className="text-gray-400">O tempo de votação vai no haip</span>
      </div>
      <button className="border py-4 px-6 hover:bg-blue-600 rounded-xl text-xl transition duration-500 drop-shadow-2xl">
        Votar!
      </button>
    </div>
  )
}
