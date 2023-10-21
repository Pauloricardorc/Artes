export function Header() {
  return (
    <div className="flex flex-col xl:flex-row w-full justify-between items-start gap-4 h-auto">
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-semibold">Arts para avaliação</p>
        <span className="text-base text-gray-400 max-w-sm">
          As melhores artes do mês, faça a escolha da melhor
        </span>
      </div>
      <div className="flex gap-2 text-xl items-center">
        <p>Tatal de rotativas</p>
        <span className="bg-white py-1 px-2 rounded-md text-gray-900 font-bold shadow-sm shadow-white">
          100
        </span>
      </div>
    </div>
  )
}
