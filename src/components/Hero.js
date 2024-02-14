import styles from "../styles/style";
import backgroundImage from "../img/08191.jpg"
const Hero = () => {
    return (
        <section id="home" className={`  flex justify-center items-center md:flex-row flex-col ${styles.paddingY} position-relative`}>
            <div className={"z-0 absolute w-full"}>
                <img  src={backgroundImage} alt="image"/>

            </div>
            <div className={"text-center z-50 "}>
                <div>
                    <h1 className={"text-4xl md:text-9xl text-white font-bold mt-10 mb-10"}>Padel Factory</h1>
                </div>
                <div className={"text-white"}>
                    <h2 className={"text-xl md:text-2xl"}>Votre centre de padel aux portes de Pau</h2>
                </div>
                <div className="flex justify-center mt-10">
                    <button className={"text-white bg-transparent border border-white px-4 py-2 mx-2 mr-10"}>
                        06 25 83 72 49
                    </button>
                    <button className={"text-white bg-transparent border border-white px-4 py-2 mx-2 ml-10"}>
                        Réserver
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;
