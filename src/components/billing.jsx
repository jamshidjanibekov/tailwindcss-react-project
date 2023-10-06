import {layout, styles} from "../util/style";
import {google, app, social} from "../assets";

const Billing = () =>{
    return (
        <section id='product' className={layout.sectionReverse}>
            <div className={layout.sectionImageReverse}>
                <img src={social} alt="social" className='w-[100%] h-[100%] relative z-[5]'/>

                <div className='absolute z-[3] -left-1/2 w-[50%] h-[55%] rounded-full top-0 white__gradient'></div>
                <div className='absolute z-[0] w-[50%] -left-1/2 h-[50%] bottom-0 rounded-full pink__gradient'></div>
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Hisob-kitob va fakturial <br className='sm:block hidden'/> osongina boshqaring
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolore perferendis totam ullam ut voluptatibus. Aspernatur consectetur doloribus harum quam?
                </p>
                
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={google} alt="google" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer'/>
                    <img src={app} alt="google" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer'/>
                    
                </div>
            </div>
        </section>
    )
}
export default Billing