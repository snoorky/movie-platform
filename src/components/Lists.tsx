import { Movie } from "../pages/App"
import Cards from "./Cards"

interface ListsProps {
  data: Movie[]
}

export default function Lists({ data }: ListsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 m-8 md:m-24 overflow-hidden">
      {data.map((movie) => (
        <Cards key={movie.id} {...movie} />
      ))}
    </div>
  )
}
