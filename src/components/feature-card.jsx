import {styles} from "../util/style";
import {features} from "../util/constants";

const FeatureCard = ({icon, title, content, idx}) =>{
    return (
        <div className={`flex flex-row p-6 rounded-[20px] feature-card cursor-pointer ${
                idx === features.length - 1 ? "mb-0" : "mb-6"}`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}>
                {icon}
            </div>

            <div className={`flex-1 flex flex-col ml-3`}>
                <h4 className={`font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1`}>
                    {title}
                </h4>
                <p className="font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]">
                    {content}
                </p>
            </div>
        </div>
    )
}
export default FeatureCard