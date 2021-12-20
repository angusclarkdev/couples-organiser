import { SideBar } from "../components/SideBar";
import { useForm } from "react-hook-form";
import { Title } from "../components/Title";
import { Box } from "../components/Box";
import { PencilNote } from "../components/svg";
import { useState } from "react";
import { Modal } from "../components/Modal";

export default function Notes() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onTouched",
    defaultValues: { note: "" },
  });
  const [isModalOpen, toggleModal] = useState(false);
  const { isDirty } = formState;
  const onSubmit = (data) => console.log(data);
  const openModalHandler = () => toggleModal(true);
  const closeModalHandler = () => toggleModal(false);
  return (
    <div className="container max-w-full h-screen flex flex-row">
      <Modal open={isModalOpen} onClose={closeModalHandler} />
      <SideBar />
      <div className="container center flex flex-col  bg-slate-200 h-full pt-4">
        <Title>Notes</Title>
        <main className="w-full py-4">
          <section className="w-5/6 mx-auto">
            <button className="ml-auto block" onClick={openModalHandler}>
              <PencilNote />
            </button>
            <p className="text-sm mb-2">Last modified</p>
            <Box>
              <p>This might be helpful</p>
              <p className="text-xs font-extralight">
                by Jane Doe, created 45 minutes ago
              </p>
            </Box>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col  mx-auto">
                <input
                  {...register("note")}
                  name="note"
                  className="w-full border-2 mx-auto border-solid border-black"
                />
                <button
                  disabled={!isDirty}
                  type="submit"
                  className="w-fit bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded disabled:bg-gray-500"
                >
                  Button
                </button>
              </div>
            </form> */}
          </section>
        </main>
      </div>
    </div>
  );
}
