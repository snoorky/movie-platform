export interface InputType {
  placeholder?: string
  type?: string
  filter?: (value: string) => void
}

export default function Input({ placeholder, type, filter }: InputType) {
  return (
    <div className="relative flex items-center bg-[#ffffff1a] rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="absolute left-4 h-4 stroke-white fill-none">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input className="w-40 md:w-full py-2 pl-10 pr-4 placeholder:text-gray-200 outline-none" type={type} placeholder={placeholder} onChange={(e) => filter && filter(e.target.value)} />
    </div>
  )
}
