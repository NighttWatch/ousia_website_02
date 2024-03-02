import './BlockchainSection.scss'
import EthIcon from '@/public/icon/blockchain/EthIcon'
import SolIcon from '@/public/icon/blockchain/SolIcon'
import PolyIcon from '@/public/icon/blockchain/PolyIcon'


export default function BlockchainSection() {
    return (
        <div className="blockchain">
            <div className="blockchain__title heading-secondary--main u-center-text">
                Supported Network
            </div>
            <div className="blockchain__content">            
                <div className='blockchain__item'>
                    <div className="blockchain__icon-box blockchain__icon-box--eth">
                        <EthIcon className='blockchain__icon blockchain__icon--eth'/>
                    </div>
                    <div className="blockchain__text heading-tertiary--main">Ethereum</div>
                </div>
                <div className='blockchain__item'>
                    <div className="blockchain__icon-box blockchain__icon-box--sol">
                        <SolIcon className='blockchain__icon blockchain__icon--sol'/>
                    </div>
                    <div className="blockchain__text heading-tertiary--main">Solana</div>
                </div>
                <div className='blockchain__item'>
                    <div className="blockchain__icon-box blockchain__icon-box--poly">
                        <PolyIcon className='blockchain__icon blockchain__icon--poly'/>
                    </div>    
                    <div className="blockchain__text u-text-center heading-tertiary--main">Polygon</div>
                </div>    
            </div>             
        </div>
    )
}