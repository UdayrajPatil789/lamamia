import Image from "next/image";
import styles from "@/app/page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h1 className={styles.heading}>
          Better design for your digital products.
        </h1>
        <p>
          Turning your Idea into Reality. we bring together the teams from the
          global tech industry.
        </p>
        <Button />
      </div>
      <div>
        <Image src="/hero.png" alt="hero" width={400} height={400} />
      </div>
    </div>
  );
}
