import {styles} from "./util/style";
import {Billing, Clients, Contract, CTA, Footer, Navbar, Statistics} from "./components";
import {Home} from "./components";
import {Business} from "./components";
import Testimonials from "./components/testimonials";

const App = () =>{
    return (
        <div className='bg-primary w-full overflow-hidden '>
            {/* Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
                <div className={`${styles.container}`}>
                    <Navbar/>
                </div>
            </div>
            {/* Home */}
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.container}`}><Home/></div>
            </div>

            <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
                <div className={`${styles.container}`}>
                    <Statistics/>
                    <Contract/>
                    <Billing/>
                    <Business/>
                    <Testimonials/>
                    <Clients/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>

        </div>
    )
}

export default App;
