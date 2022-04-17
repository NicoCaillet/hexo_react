import Navbar from '../components/Navbar/Navbar'
import TitleTypedEffect from '../components/TitleTypedEffect/TitleTypedEffect'
import hexo_icon from '../assets/hexo_image.png'
import './index.css'
import Carrousel from '../components/Carrousel/Carrousel'
import BrandCarrousel from '../components/BrandCarrousel/index'
import RatingComp from '../components/Rating/Rating'
import rat1 from '../assets/comp1.png'
import rat2 from '../assets/comp2.png'
import rat3 from '../assets/comp3.png'
import rat4 from '../assets/comp6.png'

function DashBoard() {
    const bubbles = [1, 2, 3, 4, 5, 6]
    const ratingData = [
        {
            num: 4.8,
            icon: rat1
        },
        {
            num: 4.8,
            icon: rat2
        },
        {
            num: 4.9,
            icon: rat3
        },
        {
            num: 4.9,
            icon: rat4
        },
    ]
    return (
        <section className="dashboard-container">
            <div className="home-bubble">
                {bubbles.map(item => {
                    return (
                        <div className={`bubble ${'bubble' + item}`}></div>
                    )
                })}
            </div>
            <Navbar />
            <div>
                <div className='hexo_container'>
                    <div className='row_home'>
                        <TitleTypedEffect />
                        <p className='subtitle'>Meet Hexometer, your AI sidekick that works 24/7 to catch problems before they affect your business.</p>
                        <div className='buttoncontainer'>
                            <button className='button_styled'>Get started with our free plan</button>
                        </div>
                        <p className='text'>Get started with our free plan
                            Every day your website can face an increasing range of threats. Server problems, slow landing pages, broken links, frustrating mobile experiences, embarrassing spelling mistakes, changing SEO rules, 3rd party services breaking, or security issues that put your business at risk.</p>
                        <p className='text'>To make matters worse, these issues can linger unnoticed, wasting your ad-budget and costing your business lost sales.</p>
                        <p className='text'>Hexometer monitors your website 24/7, to catch Availability, Performance, User experience, SEO, Health and Security problems, before they affect your customers.</p>
                    </div>
                    <div>
                        <img src={hexo_icon} alt="" className="principal_img"/>
                    </div>
                </div>
                <div>
                    <h2 className="title_tr">Trusted by 20,000+ businesses & compatible with over 100+ platforms</h2>
                    <div className="brand_container">
                        <BrandCarrousel />
                    </div>
                    <div className="rt_cr">
                        <div className="rt_container">
                            <div className="father_rate">
                                {ratingData.map(item => {
                                    return (
                                        <RatingComp rate={item.num} icon={item.icon} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="cr_container">
                            <Carrousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashBoard;