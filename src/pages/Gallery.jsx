import { getAuth } from "@firebase/auth";
import { useNavigate } from "react-router";


import Image3 from "../assets/article-3.png";
import Image4 from "../assets/article-4.png";
import Image5 from "../assets/article-5.png";
import Image6 from "../assets/article-6.png";
import Image7 from "../assets/article-7.png";
import Image8 from "../assets/article-8.png";

const files = {
  file: [
    {
      id: 1,
      name: "Stories",
      title: "Agency is a business you hire to outsource",
      image: Image3,
      date: "5 Nov, 2021",
    },
    {
      id: 2,
      name: "Design",
      title: "Outsource your digital marketing efforts",
      image: Image4,
      date: "29 Oct, 2021",
    },
    {
      id: 3,
      name: "Marketing",
      title: "Your business with a variety of digital",
      image: Image5,
      date: "21 Oct, 2021",
    },
    {
      id: 4,
      name: "Design",
      title: "Analytics to track and report on results",
      image: Image6,
      date: "17 Nov, 2021",
    },
    {
      id: 5,
      name: "Branding",
      title: "The most well known performance",
      image: Image7,
      date: "12 Oct, 2021",
    },
    {
      id: 6,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 7,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 8,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 9,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 10,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 11,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 12,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 13,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
    {
      id: 14,
      name: "Stories",
      title: "Marketing channels native advertising",
      image: Image8,
      date: "9 Oct, 2021",
    },
  ],
};

export default function Gallery() {
  const auth = getAuth();
  const navigate = useNavigate();

  function onLogout() {
    auth.signOut();
    navigate("/signin");
  }

  return (
    <section className="bg-blu">
      <h1 className="text-xl md:text-3xl text-center mt-6 font-semibold text-red uppercase  md:tracking-wide">
        Welcome Back
       
      </h1>
      <div className="justify-center bg-white px-4 lg:pb-20 md:pt-20 pt-10 lg:px-20">
        <div className="border-y border-y-blue border-opacity-30 py-10 lg:py-20">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {files.file.map((file) => (
              <li key={file?.id} className="relative cursor-pointer">
                <div className="group block w-full aspect-w-10 aspect-h-7  bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <img
                    src={file?.image}
                    alt=""
                    className="object-cover group-hover:opacity-75 hover:scale-100"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-lg space-y-1 py-3 lg:py-1">
                    <h3 className="text-blue font-normal">{file?.name}</h3>
                  </div>
                  <div className="py-1 lg:py-0 lg:w-11/12 lg:tracking-tight">
                    <h1 className="font-grotesk text-blue text-sm lg:leading-snug font-bold lg:text-2xl">
                      {file?.title}
                    </h1>
                  </div>
                  <ul className="flex space-x-5">
                    <li className="text-blue opacity-50 font-grotesk">
                      {file?.date}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p
        onClick={onLogout}
        className="text-[13px] md:text-base text-sm lg:text-base text-red hover:text-opacity-90 transition duration-200 ease-in-out cursor-pointer "
      >
        Sign Out
      </p>
    </section>
  );
}
