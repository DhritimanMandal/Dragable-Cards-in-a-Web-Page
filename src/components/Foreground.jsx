import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      desc: "This is a simple react docs card project.",
      fileSize: "0.8Mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "You can drag and play with these cards.",
      fileSize: "0.5Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Don't drag me around 😫.",
      fileSize: "0.3Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This card is lowkey dope.",
      fileSize: "0.7Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "blue" },
    }
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 p-6 flex-wrap">
      {data.map((item) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;