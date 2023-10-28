export function Progress() {
  return (
    <div className="flex flex-1">
      <div className="relative h-4 w-full rounded-full bg-zinc-800 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-2/12 bg-blue-500 rounded-full" />
      </div>
    </div>
  )
}
