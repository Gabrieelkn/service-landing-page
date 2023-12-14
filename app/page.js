import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/container/container";
import About from "@/sections/about/about";
import Services from "@/sections/services/services";
import Prices from "@/sections/prices/prices";
import Contact from "@/sections/contact/contact";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.overlay}>
          <div className={styles.wrapper}>
            <span>Car service</span>
            <h1>Fix the problems of your personal car</h1>
            <button className={styles.button}>Call us</button>
          </div>
        </div>
      </main>
      <Container>
        <Anchor id="about" />
        <About />
        <Anchor id="services" />
        <Services />
        <Anchor id="prices" />
        <Prices />
        <Anchor id="contact" />
        <Contact />
      </Container>
    </>
  );
}

function Anchor({ id }) {
  return (
    <div id={id} className={styles.anchor}>
      {id}
    </div>
  );
}
