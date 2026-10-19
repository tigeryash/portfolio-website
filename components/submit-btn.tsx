import { FaPaperPlane } from "react-icons/fa";

type SubmitBtnProps = {
  pending: boolean;
};

export default function SubmitBtn({ pending }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white transition-all outline-none hover:scale-[1.10] hover:bg-gray-950 focus-visible:scale-[1.10] active:scale-105 disabled:scale-100 disabled:bg-gray-900/65 dark:bg-white/10 dark:hover:bg-white/20"
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? (
        <>
          <span className="sr-only">Sending…</span>
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        </>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
