import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import peopleJson from "../libs/people-data";

export default function Home() {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);

  const handleOnClick = (id) => {
    router.push(`/people/${id}`);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const json = await data.json();
      setCharacters(json.results);
    };

    getCharacters();
  }, []);

  useEffect(() => {
    const getMyData = async () => {
      // Fetch data from our own API endpoint
      const data = await fetch("/api/people");
      console.log("data from my api>>>", await data.json());
    };

    getMyData();
  }, []);

  console.log("characters", characters);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic routes example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to next.js</h1>

        <p className={styles.description}>
          We want to have multiple people pages
        </p>

        <div>
          <ul>
            {characters.map((person) => (
              <li key={person.id} onClick={() => handleOnClick(person.id)}>
                {person.name}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤</p>
      </footer>
    </div>
  );
}
