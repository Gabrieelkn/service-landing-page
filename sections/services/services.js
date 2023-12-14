import styles from "./services.module.css";
import Image from "next/image";
import Breaks from "@/public/carBreaks.jpg";
import Oil from "@/public/oil.jpg";
import Engine from "@/public/engine.jpg";

export default function Services() {
  return (
    <div className={styles.services}>
      <h2>Some of the services we offer</h2>
      <div className={styles.wrapper}>
        <ServiceCard
          image={Oil}
          name="Maintenance"
          about="We change the oil and filters of the car"
        />
        <ServiceCard
          image={Breaks}
          name="BRAKE SYSTEM REPAIR"
          about="WE WILL CHANGE YOUR brake pads, rotors, clips and calipers"
        />
        <ServiceCard
          image={Engine}
          name="Engine repair"
          about="WE WILL MAKE YOUR ENGINE AS GOOD AS ON THE FIRST DAY"
        />
      </div>
    </div>
  );
}

function ServiceCard({ image, name, about }) {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <h3>{name}</h3>
        <p>{about}</p>
        <button className={styles.button}>View prices</button>
      </div>
      <Image
        src={image}
        height={400}
        width={300}
        alt="service"
        className={styles.background}
      />
    </div>
  );
}
