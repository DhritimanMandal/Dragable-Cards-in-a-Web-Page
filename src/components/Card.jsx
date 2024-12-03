import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 15}} whileDrag={{scale:1.1}} className="relative flex-shrink-0 w-[14.6rem] h-72 rounded-[45px] shadow-[0_25px_20px_-10px_rgba(0,0,0,0.3)] bg-zinc-900 text-white opacity-95 py-7 px-7 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-[18px] leading-tight mt-5 font-[600] opacity-100 tracking-[0.01em]">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-7 py-3 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="bg-zinc-200 rounded-full p-[7px]">
            {data.close ? (
              <MdOutlineClose size={18} color="#000" />
            ) : (
              <MdOutlineFileDownload size={18} color="#000" />
            )}
          </span>
        </div>
        {
            data.tag.isOpen ? (
                <div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className="text-md font-[600]">{data.tag.tagTitle}</h3>
                </div>
            ):null
        }
        
      </div>
    </motion.div>
  );
};

export default Card;