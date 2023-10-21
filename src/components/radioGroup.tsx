'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { StaticImageData } from 'next/image'
import { Artes } from './artes'

interface Props {
  data: {
    id: string
    titulo?: string
    votos?: number
    image?: string | StaticImageData
  }[]
}

export function RadioGroupArtes({ data }: Props) {
  return (
    <RadioGroup.Root className="flex flex-col xl:flex-row gap-10 justify-center">
      {data.map((arte) => (
        <RadioGroup.Item value={arte.id} key={arte.id} className="w-full group">
          <RadioGroup.Indicator />
          <Artes image={arte.image || ''} />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
