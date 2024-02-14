import { Link } from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/style";
import Hero from "./Hero";
import backgroundImage from "../img/08191.jpg";

const Public = () => {
    const content = (
        <div className="bg-testing1 w-full overflow-hidden position-relative">
            <div className={`bg-black opacity-75 z-50 absolute`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={` flex justify-center ${styles.paddingY} md:h-auto`} style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '8000px'
            }}>
                <div className={` p-40 ${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-testing2 ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>

    )
    return content
}

export default Public