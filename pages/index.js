import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { getNames, addName } from '../data/database';
import { notification } from 'antd';

export default function Home() {

  const [argos, setArgos] = useState([]);
  const [input, setInput] = useState("");
  
  // get names from database
  const refresh = () => getNames().then (res => setArgos(res.data));
  
  useEffect(() => {
    refresh();
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'Salut toi',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submission', input);

    // openNotification();

    // function to add a new name at form submission
    addName(input).then((res) => {
      // have to modify this to be cooler
      window.alert("Argonaute ajouté, félicitations !");
      refresh();
    });
    
    // input to be empty
    setInput("");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Jason &amp; les Argonautes</title>
        <link rel="icon" href="/jasicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Jason &amp; les Argonautes</h1>
      </header>

      <main className={styles.main}>
        <h2>Ajouter un(e) Argonaute</h2>

        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Indiquez le nom de l&apos;Argonaute"
              onChange={handleChange}
              value={input}
            />
            <button>Ajouter</button>
          </form>         
          
        </div>

        <ul>
          {argos.map((argo, id) => (
            <li key={argo.name} onClick={openNotification}>{id + 1} - {argo.name}</li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Départ de Pagasae, Thessalie</p>
          <p>Bateau : L'Argo</p>
          <p>Equipage : 50</p>
        </div>
      </footer>
    </div>
  )
}
