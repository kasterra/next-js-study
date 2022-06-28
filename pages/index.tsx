import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IMovie } from "../types/movietype";

const API_KEY = "32a085710e51fc083d936408e4910167";

const Home = () => {
  const [movies, setMovies] = useState<IMovie["results"]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Head>Home</Head>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={750}
            alt="movie poster"
          />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx global>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
