import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
        <div className="flex items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="h-10 w-10  rounded-full mr-3"
          />
          <div>
            <h2 className="text-gray-800 font-bold text-sm">{news.author.name}</h2>
            <p className="text-gray-600 text-xs">{news.author.published_date}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-600 cursor-pointer" />
      </div>

      {/* Thumbnail */}
      <div>
      <h3 className="text-gray-900 font-bold text-2xl p-2 mb-3">{news.title}</h3>
      </div>
      <img
        src={news.image_url}
        alt={news.title}
        className=" w-full  p-4 rounded-3xl  object-cover mb-4"
      />

      {/* Content Section */}
      <div className="p-2">
        {/* Title */}
        

        {/* Details */}
        <p className="text-gray-600 text-xl mb-3">
          {news.details}
        </p>

        {/* Read More */}
        <a
          href="#"
          className="text-blue-600 font-semibold text-sm hover:underline"
        >
          Read More
        </a>

        {/* Rating and Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-gray-800 text-sm font-medium">
              {news.rating.number}
            </span>
          </div>
          <div className="flex items-center">
            <FaEye className="text-gray-600 mr-1" />
            <span className="text-gray-800 text-sm font-medium">
              {news.total_view}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
