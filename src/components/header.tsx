'use client'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Header() {
  const { data } = useSession()

  return (
    <div className="flex flex-col xl:flex-row w-full justify-between items-center gap-4 h-auto pb-4">
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-semibold">Artes para avaliação</p>
        <span className="text-base text-gray-400 max-w-sm">
          As melhores artes do mês, faça a escolha da melhor
        </span>
      </div>
      <div className="flex gap-2 text-xl items-center">
        {data ? (
          <>
            <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden border-2 border-blue-600">
              <Image
                src={data.user?.image || ''}
                alt=""
                width={120}
                height={120}
              />
            </div>
            <span className="bg-white py-1 px-2 text-base rounded-md text-gray-700 font-bold shadow-sm shadow-white">
              {data.user?.name}
            </span>
          </>
        ) : (
          <button
            className="border border-white py-2 px-6 rounded-md"
            onClick={() => signIn('google')}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}
