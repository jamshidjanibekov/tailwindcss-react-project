import {layout, styles} from "../util/style";
import {search} from "../assets";
import Button from "./button";

const Contract = () =>{
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Bir necha qadamda <br/> kontrakt tuzish </h2>
                <p className={`${styles.paragraph} max-w--[550px] mt-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto atque cum debitis eius facilis laboriosam mollitia saepe, sint totam!
                </p>
                <Button/>
            </div>
            <div className={layout.sectionImage}>
                <img src={search} alt="search" className={'w-[100%] h-100%'} />
            </div>

        </section>
    )
}
export default Contract