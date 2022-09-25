import Link from "next/link";

export default function EmailSubscribe() {
  return (
    <div className="w-3/4 mx-auto shadow-gray-900"> 
      <div className="flex justify-center items-center gap-5 my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 dark:text-white text-[#171717]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <h4 className="text-2xl">
          <span className="dark:text-white text-[#171717] font-bold uppercase">Subscribe</span> to
          get new posts emailed to you, daily. No spam.
        </h4>
      </div>
      <div className="w-3/4 mx-auto">
        <input
          className="shadow text-lg md:text-xl font-medium appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
        <div className="flex justify-center items-center">
          <button className="rounded-sm mt-5 md:mt-5 text-lg md:text-xl font-medium mr-3 md:mr-10 bg-[#171717] dark:bg-white text-white dark:text-[#171717] px-2 md:px-3 py-1">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center text-lg my-10">
        2k+ business professionals act on our advice every day. You should too.
      </p> 
    </div>
  );
}
