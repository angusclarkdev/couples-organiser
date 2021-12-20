import { SideBar } from '../components/SideBar'
import { Title } from '../components/Title'

export default function Notes() {
  return (
    <div className="container h-screen">
      <div className="flex flex-row h-full">
     <SideBar />
      <main className="w-full py-4">
        <Title> Cook Book </Title>
       </main>
      </div>
    </div>
  )
}