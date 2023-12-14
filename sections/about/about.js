import styles from "./about.module.css";
import Image from "next/image";
import Image1 from "@/public/aboutus.jpg";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          tincidunt nisl. Fusce purus sapien, cursus ac molestie sed, placerat
          in ex. Curabitur et nunc ut arcu condimentum rhoncus. Fusce eget
          scelerisque ex. Nunc porttitor, urna et ullamcorper consequat, magna
          lorem vulputate lectus, sed dignissim elit lectus ac nulla. Sed non
          nisl a metus euismod maximus quis eget lorem. Duis auctor viverra
          ligula vel porttitor. In hac habitasse platea dictumst. Pellentesque
          purus nulla, consectetur a neque et, ullamcorper pellentesque justo.
          Morbi mattis venenatis mi. Donec mollis diam metus, eget semper massa
          finibus sit amet.
        </p>
      </div>
      <Image src={Image1} width="300" height="200" alt="image" />
    </div>
  );
}
