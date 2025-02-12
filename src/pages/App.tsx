import { useEffect, useState } from "react"
import Header from "../components/Header"
import { APIMovies } from "../Api"
import Lists from "../components/Lists"

export interface Movie {
  id: number
  poster_path: string
  vote_average: number
  release_date: string
  title: string
}

export default function Perfil() {
  const [collections, setCollections] = useState<Movie[]>([])
  const [filteredCollections, setFilteredCollections] = useState<Movie[]>([])

  useEffect(() => {
    const fetchCollections = async () => await APIMovies.get("/movie/popular")
      .then((response => {
        setCollections(response.data.results)
        setFilteredCollections(response.data.results)
      }))
    fetchCollections()
  }, [])

  const filter = (value: string) => {
    if (!value) {
      setFilteredCollections(collections)
      return
    }

    const filtered = collections.filter((item) => item.title.toLowerCase().startsWith(value))
    setFilteredCollections(filtered)
  }

  return (
    <div className="">
      <Header filter={filter} />
      <Lists data={filteredCollections} />
    </div>
  )
}
