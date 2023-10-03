import { AiFillStar } from "react-icons/ai";

function Card({item}) {

  const movieName = item.title || item.name
  const truncatedmovieName = movieName.length > 12 ? movieName.substring(0, 10) + '...' : movieName;

  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  const roundedRating = Math.floor(item.vote_average * 10) / 10;

  return (
    <div className="w-32 h-56 rounded">
      <div className="w-auto h-2/3">
        <img src={imageUrl} alt="movie poster" className="w-full h-full"/>
      </div>

      <div className="bg-slate-800 w-auto h-1/3">
        <div className="h-1/2 flex justify-center items-center">
          <h3 className=" text-white">{truncatedmovieName}</h3>
        </div>

        <div className="flex justify-end items-center h-1/2">
          <AiFillStar className="text-yellow-500" />
          <p className="text-white mr-2">{roundedRating}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;