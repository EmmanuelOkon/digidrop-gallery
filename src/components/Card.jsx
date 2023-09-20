import React from "react";

function Card({ data }) {
  const { id, url, tags } = data;

  return (
    <>
      <div className="w-[10rem] h-[10rem] bg-blue">
        <img className="w-[200px] h-[200px] bg-red object-cover" src={url} alt={id} />
        <div className="tags w-[200px] h-[200px] ">
          {tags.map((tag, index) => (
            <span key={index} className="tag bg-fadeGreen text-white text-2xl">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;