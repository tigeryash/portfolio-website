import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group outline-none rounded-full text-white bg-gray-900
                    flex h-[3rem] w-[8rem] items-center justify-center gap-2
                    transition-all focus:scale-[1.10] hover:bg-gray-950 hover:scale-[1.10]
                    active:scale-105 disabled:scale-100 disabled:bg-opacity-65
                    dark:bg-white dark:bg-opacity-10 dark:text-black dark:hover:text-white"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all 
                                    group-hover:translate-x-1 group-hover:-translate-y-1"
          />{" "}
        </>
      )}
    </button>
  );
}
