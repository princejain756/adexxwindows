import React from 'react';
import { Check } from 'lucide-react';

const differenceItems = [
    {
        title: '',
        subtitle: 'Stronger. Sleeker. Smarter.',
        icon: '/diffrence_icon_a.svg',
        features: [
            'Patented alloy, 40% stronger than standard aluminum.',
            'Enables larger windows with slimmer profiles.',
            'Cyclone-tested for extreme durability & reliability.'
        ]
    },
    {
        title: '',
        subtitle: 'Tested Toughness, Trusted Strength.',
        icon: '/diffrence_icon_b.svg',
        features: [
            'Windows tested for wind, water, and air performance.',
            'Leak-proof, rattle-free & weather-resistant Windows.',
            'Transparent scoring system for consumer confidence.'
        ]
    },
    {
        title: '',
        subtitle: 'Assured Service.',
        icon: '/diffrence_icon_c.svg',
        features: [
            '12-Year Warranty',
            'Dedicated 7-Day Call Center for support.',
            'Rigorous post-installation checks for complete satisfaction.'
        ]
    },
    {
        title: '',
        subtitle: 'Greener Homes.',
        icon: '/diffrence_icon_d.svg',
        features: [
            'Aluminium – the world’s only eternally recyclable material.',
            'GreenPro Certified products for a greener future.',
            'Sustainable production processes for eco-conscious living.'
        ]
    }
];

const EterniaDifference: React.FC = () => {
    return (
        <section className="py-20 bg-[#00333d] text-white">
            <div className="max-w-[90rem] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">The Adexx Difference</h2>
                </div>

                <div className="border border-white/10 rounded-3xl p-6 md:p-8 bg-[#003B46]/30 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {differenceItems.map((item, index) => (
                            <div key={index} className={`flex flex-col h-full ${index !== 0 ? 'pt-8 md:pt-0 md:pl-6' : ''}`}>

                                {/* Header Section */}
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[17rem] h-[17rem] shrink-0">
                                        <img src={item.icon} alt={item.subtitle} className="w-full h-full object-contain" />
                                    </div>
                                    {item.title && (
                                        <h3 className="text-xl font-bold uppercase tracking-wider">{item.title}</h3>
                                    )}
                                </div>

                                {/* Subtitle Pill */}
                                <div className="mb-4">
                                    <span className="inline-block px-4 py-2 rounded-lg bg-[#004e5a] text-[#4fd1e3] text-sm font-semibold italic">
                                        {item.subtitle}
                                    </span>
                                </div>

                                {/* Feature List */}
                                <ul className="space-y-4">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex gap-3 text-sm text-gray-300 leading-relaxed group">
                                            <Check className="w-4 h-4 text-[#4fd1e3] mt-1 shrink-0 group-hover:text-white transition-colors" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EterniaDifference;
