import styles from "./socials.module.css";
import Image from "next/image";
import { instagram, github, youtube, naver, resume } from "@/assets/images";

const Socials = () => {
  return (
    <div className={styles.container}>
      <a href="https://sungyupjoo.vercel.app/">
        <Image
          src={resume}
          alt="resume"
          width={24}
          height={24}
          style={{ borderRadius: "50%" }}
        />
      </a>
      <a href="https://www.youtube.com/@snoopy_next_door">
        <Image src={youtube} alt="youtube" width={24} height={24} />
      </a>
      <a href="https://www.instagram.com/sungyupjoo/?hl=en">
        <Image src={instagram} alt="instagram" width={24} height={24} />
      </a>
      <a href="https://blog.naver.com/partlycloudy">
        <Image src={naver} alt="naver" width={24} height={24} />
      </a>
      <a href="https://github.com/sungyupjoo">
        <Image src={github} alt="github" width={24} height={24} />
      </a>
    </div>
  );
};

export default Socials;
