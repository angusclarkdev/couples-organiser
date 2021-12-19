import { SideBar } from '../components/SideBar'

export default function Notes() {
  return (
    <div className="container h-screen">
      <div className="flex flex-row h-full">
     <SideBar />
      <main className="w-full py-4">
         <h1 className="text-center text-3xl">Cook book</h1>
       </main>
      </div>
    </div>
  )
}