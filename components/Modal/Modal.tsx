import { Close } from "../svg";

export function Modal({
  open,
  onClose,
  onSubmitHandler,
}: {
  open: boolean;
  onClose: () => void;
  onSubmitHandler: () => void;
}) {
  if (!open) return <></>;
  return (
    <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex">
      <div className="w-80 h-80 shadow-md bg-white m-auto">
        <form className="h-full flex flex-col p-2">
          <button className="block ml-auto" onClick={() => onClose()}>
            <Close />
          </button>
          {/* title */}
          <input name="title" />
          {/* main body of note */}
          <textarea
            name="note-content"
            className="w-full h-full my-2 p-4 border-2"
          />
          {/* buttons */}
          <div className="flex flex-row justify-between mx-2 mt-auto mb-2">
            <button
              onClick={() => onSubmitHandler()}
              className="p-2 rounded border-2"
            >
              Add
            </button>
            <button onClick={() => onClose()} className="p-2 rounded border-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
