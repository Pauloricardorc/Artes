'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { Artes } from './artes'
import { ArteProps } from '@/types/ArteProps'

interface Props {
  data?: ArteProps[]
  radioSelected: (selected: ArteProps[]) => void
}

export function RadioGroupArtes({ data, radioSelected }: Props) {
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <RadioGroup.Root
      className="flex flex-col xl:flex-row gap-10 justify-center"
      onValueChange={(value) =>
        radioSelected(data.filter((i) => i.id === value))
      }
    >
      {data.map((arte) => (
        <RadioGroup.Item value={arte.id} key={arte.id} className="w-full group">
          <RadioGroup.Indicator />
          <Artes image={arte.image || ''} />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
