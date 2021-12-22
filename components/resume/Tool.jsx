import html from "~/assets/img/tool/html.png";
import css from "~/assets/img/tool/css.png";
import js from "~/assets/img/tool/js.png";
import node from "~/assets/img/tool/node.png";
import Image from "next/image";
// asset
const data = [
  {
    name: "HTML",
    href: "https://www.w3schools.com/html",
    src: html,
  },
  {
    name: "CSS",
    href: "https://www.w3schools.com/css",
    src: css,
  },
  {
    name: "JS",
    href: "https://www.w3schools.com/js",
    src: js,
  },
  {
    name: "NODE",
    href: "https://nodejs.org/",
    src: node,
  },
];

const Tool = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10 px-19 sm:px-32 2xl:px-80">
      {data.map((item, index) => (
        <div key={index} className="w-6/12 md:w-4/12 lg:w-2/12 p-4">
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <Image src={item.src.src} alt="tool" width={140} height={140} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tool;
