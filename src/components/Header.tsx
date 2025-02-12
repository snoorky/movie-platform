import { Link } from "react-router-dom";
import Input, { InputType } from "./Input";

export default function Header({ filter }: InputType) {
  return (
    <header className="relative flex items-center justify-between px-8 md:px-24 py-4">
      <div className="absolute inset-0 w-full h-full bg-white opacity-5"></div>
      <div className="relative z-1 flex items-center justify-center">
        <Link to={"/"}><img className="h-8 md:h-14" src="/logo.png" alt="Cinefy logotipo" /></Link>
        <p className="absolute -right-7 md:-right-5 bottom-0 text-sm">v1.0</p>
      </div>
      <div>
        <Input placeholder="Search..." type="text" filter={filter} />
      </div>
    </header>
  )
}
