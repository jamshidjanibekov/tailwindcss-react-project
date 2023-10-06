import {layout, styles} from "../util/style";
import Button from "./button";
import {features} from "../util/constants";
import FeatureCard from "./feature-card";

const Business = () =>{
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2}`}>
                    Bisnes rivojlantiring <br className='sm:block hidden'/> pulni hal qilamiz.
                </h2>
                <p className={ `${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae delectus earum facilis ipsam odit perspiciatis quas quasi repudiandae!
                </p>
                <Button styles={'mt-10'}/>
            </div>
            <div className={`${layout.sectionImage} flex-col`}>
                {features.map((feature, idx) => (
                    <FeatureCard key={feature.id} {...feature} idx ={idx} />
                ))}
            </div>
        </section>
    )
}
export default Business