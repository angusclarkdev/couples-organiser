import { SideBar } from '../components/SideBar'
import { useForm } from "react-hook-form";

export default function Notes() {
  const { handleSubmit, formState, register } = useForm({
    mode: 'onTouched',
    defaultValues: { note: "" }
  })
  const { isDirty } = formState
  const onSubmit = data => console.log(data);

  return (
    <div className="container max-w-full h-screen flex flex-row">
     <SideBar />
      <main className="w-full py-4">
        <h1 className="text-center text-3xl">Notes</h1>

          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>   
          <div className='flex flex-col w-5/6 mx-auto'>
            <input {...register("note")} name="note" className='w-full border-2 mx-auto border-solid border-black' />
            <button disabled={!isDirty} type='submit' className="w-fit bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded disabled:bg-gray-500">
              Button
            </button>
          </div>         
          </form>

       </main>
      </div>
  )
}