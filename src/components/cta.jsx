import {styles} from "../util/style";
import Button from "./button";

const Cta  = () =>{
    return (
        <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-dark-gradient  box-shadow`}>
            <div className={`flex-1 flex flex-col`}>
                <h2 className={`${styles.heading2}`}>Xizmatlarni sinab korish</h2>
                <p className={`${styles.paragraph} max-w-[550px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deserunt dicta dignissimos ea eius, fugiat minima minus officia reprehenderit.</p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button/>
            </div>
        </div>
    )
}
export default Cta