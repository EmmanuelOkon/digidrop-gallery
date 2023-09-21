import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SearchBox from "../components/searchBox";
import Image3 from "../assets/article-3.png";
import Image4 from "../assets/article-4.png";
import Image5 from "../assets/article-5.png";
import Image6 from "../assets/article-6.png";
import Image7 from "../assets/article-7.png";
import Image8 from "../assets/article-8.png";
import Loading from "../components/Loading";

const ImageData = [
  {
    id: "gary",
    tags: ["#gary"],
    image: Image3,
  },
  {
    id: "cato",
    tags: ["#cato"],
    image: Image4,
  },
  {
    id: "king",
    tags: ["#king"],
    image: Image5,
  },
  {
    id: "cake",
    tags: ["#cake"],
    image: Image6,
  },
  {
    id: "quinn",
    tags: ["#quinn"],
    image: Image7,
  },
  {
    id: "moon",
    tags: ["#moon"],
    image: Image8,
  },
  {
    id: "sun",
    tags: ["#sun"],
    image: Image8,
  },
  {
    id: "star",
    tags: ["#star"],
    image: Image8,
  },
  {
    id: "air",
    tags: ["#air"],
    image: Image8,
  },
];

export default function Gallery() {
  const [images, setImages] = useState(ImageData);
  const [loading, setLoading] = useState(true);
  const [searchByTag, setSearchByTag] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 3000);
  }, []);

  const filterImages = (imagesData, term) => {
    return imagesData.filter((image) =>
      image.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase()))
    );
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
  }

  const filteredImages = filterImages(images, searchByTag);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <h1 className="text-xl md:text-3xl text-center my-6 text-red font-raleway font-bold  md:tracking-wide">
            Digidrop Gallery
          </h1>
          <SearchBox
            searchByTag={searchByTag}
            setSearchByTag={setSearchByTag}
          />
          <div className="justify-center px-4 lg:pb-20 md:pt-20 pt-10 lg:px-20">
            <div className="border-y border-y-blue border-opacity-30 py-10 lg:py-20">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <div
                      className="characters grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {filteredImages.map((image, index) => (
                        <Draggable
                          key={image.id}
                          draggableId={image.id}
                          index={index}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="cursor-pointer list-none outline-0 w-full flex justify-center items-center"
                            >
                              <div className="w-full flex flex-col justify-center items-center aspect-w-10 aspect-h-7 focus-within:ring-0 focus-within:ring-offset-0 bg-grey bg-opacity-40 rounded-[4px] overflow-hidden">
                                <img
                                  src={image?.image}
                                  alt={image?.id}
                                  className="object-cover w-full group-hover:opacity-75 hover:scale-100"
                                />
                                <div className=" w-full text-center">
                                  <p className="capitalize font-raleway py-2 text-white font-semibold text-xl tracking-wider ">
                                    {image.tags}
                                  </p>
                                </div>
                              </div>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
