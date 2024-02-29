import './RoadmapSection.scss';
import FilledCircleIcon from '@/public/icon/roadmap/FilledCircleIcon';
import RoadmapIconMap1 from '@/public/icon/roadmap/RoadmapIconMap-1';
import RoadmapIconMap2 from '@/public/icon/roadmap/RoadmapIconMap-2';
import RoadmapIconMap3 from '@/public/icon/roadmap/RoadmapIconMap-3';
import RoadmapIconMap4 from '@/public/icon/roadmap/RoadmapIconMap-4';
import RoadmapIconMap5 from '@/public/icon/roadmap/RoadmapIconMap-5';
import RoadmapIconMap6 from '@/public/icon/roadmap/RoadmapIconMap-6';

const roadmap_list = [{
    title: "Launching AI-Powered Swap System - V1 Alpha",
    month: "March",
    icon: <RoadmapIconMap1 className='roadmap__item-icon'/>,
    year: 2024,
    number: 1
},{
    title: "Limit Order and Perpendicular Trading System Blast Off!",
    month: "April",
    icon: <RoadmapIconMap2 className='roadmap__item-icon'/>,
    year: 2024,
    number: 2
},
{
    title: "Launching Trading Mobile Application - V1 Alpha",
    month: "May",
    icon: <RoadmapIconMap3 className='roadmap__item-icon'/>,
    year: 2024,
    number: 3
},
{
    title: "Enhancement of API services for external developers",
    month: "May",
    icon: <RoadmapIconMap4 className='roadmap__item-icon'/>,
    year: 2024,
    number: 4
},
{
    title: "Launching Advanced Portfolio Management System",
    month: "June",
    icon: <RoadmapIconMap5 className='roadmap__item-icon'/>,
    year: 2024,
    number: 5
},
{
    title: "Launching Advanced Copy Trading System",
    month: "July",
    icon: <RoadmapIconMap6 className='roadmap__item-icon'/>,
    year: 2024,
    number: 6
}];

export default function RoadmapSection() {
    return (
        <div className='roadmap' id='roadmap'>
            <div className="roadmap__title heading-secondary--main u-center-text">Ousia Road Map</div>
            <div className="roadmap__description heading-secondary--sub u-center-text">Q1 and Q2 Ultimate Roadmap</div>
            <div className="roadmap__box">
                {roadmap_list.map(item => (
                    <div key={item.number} className={`roadmap__item u-center-text`}>
                        <div className="roadmap__item-title heading-tertiary--main">
                            {item.title}
                        </div>
                        <div className='roadmap__item-box heading-tertiary--sub'>
                            <div className="roadmap__item-month">
                                {item.month}
                            </div>
                            {item.icon}
                            <div className="roadmap__item-year heading-tertiary--sub">
                                {item.year}
                            </div>
                        </div>                                            
                    </div>
                ))}
            </div>
            <div className="roadmap__line">
                <div className="roadmap__line-circle">
                    <FilledCircleIcon className='roadmap__line-icon'/>
                    <FilledCircleIcon className='roadmap__line-icon'/>
                    <FilledCircleIcon className='roadmap__line-icon'/>
                    <FilledCircleIcon className='roadmap__line-icon'/>
                    <FilledCircleIcon className='roadmap__line-icon'/>
                    <FilledCircleIcon className='roadmap__line-icon'/>
                </div>
                <div className='u-line-dashed'/>        
            </div>                
        </div>
    )
}