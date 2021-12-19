import { Logo } from "../svg";

export function SideBar() {
  return (
       <aside className=" bg-blue-800 text-2xl w-64">
          <div className="flex flex-row items-center px-3 pt-2">
            <Logo />
            <span className="text-white text-xs">Couples Organiser</span>
          </div>
          <nav className="flex flex-col text-blue-100 py-2">
            <a href="/notes" className=" my-1.5 px-4"> Notes</a>
            <a href="/photos" className=" my-1.5 px-4" >Photos</a>
            <a href="/calendar" className=" my-1.5 px-4" >Calendar</a>
            <a href="/cookbook" className=" my-1.5 px-4" >Cook book</a>
          </nav>
        </aside>
  )
}