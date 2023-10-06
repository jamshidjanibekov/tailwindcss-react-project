import {styles} from "../util/style";

const ClientCard = ({logo, title}) =>{
    return (
        <div className={`flex-1 ${styles.flexCenter} s:min-w-[192px] min-w-[120px] m-4 cursor-pointer`}>
            <div className={`sm:w-[192px] w-[100px]`}>
                {logo}
                <p className={`${styles.paragraph} font-semibold text-gradient mt-1 -ml-4`}>{title}</p>
            </div>

        </div>
    )
}
export default ClientCard