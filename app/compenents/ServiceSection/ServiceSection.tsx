import './ServiceSection.scss';



export default function ServiceSection() {
    return (
        <div className="service" id='package'>
            <h1 className="service__title heading-secondary--main u-center-text">What is Ousia?</h1>
            <div className='service__content-box'>
                <div className="service__content u-center-text">
                    <img className="service__image" src='/images/service/swap.png' alt='swap' />
                    <h1 className="service__subtitle heading-primary--sub u-center-text">Swap</h1>
                    <p className="service__description heading-primary--sub-500">OUSIA enables lightning-fast conversions between cryptocurrencies on different networks. Convert any coin from Ethereum to Solana, Polygon to Solana, or Solana to Ethereum in seconds</p>
                </div>
                <div className="service__content u-center-text">
                    <img className="service__image" src='/images/service/swap.png' alt='swap' />
                    <h1 className="service__subtitle heading-primary--sub u-center-text">Finance</h1>
                    <p className="service__description heading-primary--sub-500">The mission of OUSIA is to merge traditional investment platforms with the future of the financial system, blockchain</p>
                </div>
                <div className="service__content u-center-text">
                    <img className="service__image" src='/images/service/swap.png' alt='swap' />
                    <h1 className="service__subtitle heading-primary--sub u-center-text">Portfolio</h1>
                    <p className="service__description heading-primary--sub-500">OUSIA will offer varaity of data to users to perfect their invesments</p>
                </div>
            </div>
        </div>
    )   
}