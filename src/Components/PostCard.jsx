import React from "react";
import service from "../Service/Services";
import { Link } from "react-router-dom";

function PostCard({ title, featureImage, $id }) {
  return (
    <Link to={`/post/${$id}`} key={$id}>
      <div className="group flex flex-col bg-gray-50 rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300 overflow-hidden w-72 sm:w-80 md:w-96">
        {/* Image Section */}
        <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            src={service.getFile(featureImage)}
            alt={title}
          />
        </div>

        {/* Title Section */}
        <div className="p-4">
          <h2
            className="text-lg font-sans font-semibold line-clamp-2"
            style={{ textShadow: "3px 2px 2px rgba(0, 0, 0, 0.1)" }}
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
