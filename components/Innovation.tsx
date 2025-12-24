import React from 'react';

const features = [
    {
        title: 'Storm Proof Strength',
        description: 'Designed to withstand cyclonic winds',
    },
    {
        title: 'Wider Views',
        description: 'Larger panel sizes',
    },
    {
        title: 'No Rattling',
        description: 'Sturdy quality accessories & woolpile',
    },
    {
        title: 'Noise Insulation',
        description: 'High quality gaskets & fin based woolpile',
    },
    {
        title: 'Rugged Reliability',
        description: '40% stronger than standard aluminium',
    },
    {
        title: 'Enhanced Security',
        description: 'Multi-point locking mechanisms',
    },
    {
        title: 'No Drips or Leaks',
        description: 'Efficient water drainage system',
    },
    {
        title: 'Peace of Mind',
        description: '12 year brand warranty on profiles + 5 years warranty on hardware',
    },
    {
        title: 'Made for Indian Conditions',
        description: 'Collapsible integrated pest mesh',
    },
    {
        title: 'Smooth Operation',
        description: '1L+ Cycle tested rollers & hinges',
    },
    {
        title: 'High Quality Sealing',
        description: 'Silcated fin-based wool pile to block out water, dust & sound',
    }
];

const Innovation: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-[90rem] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">When Innovation Meets Perfection</h2>
                </div>

                {/* Desktop Layout - Surrounding Features */}
                <div className="hidden lg:block relative h-[800px] w-full">
                    {/* Central Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-4xl z-10 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/wheninnovationmeetsperfection.webp"
                            alt="Innovation Window View"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Features Positioned Around - Matches website layout 4-2-2-3 */}

                    {/* Top Row (4 items) */}
                    <div className="absolute top-[5%] left-[10%] w-56 text-center">
                        <h3 className="font-bold text-slate-900">Storm Proof Strength</h3>
                        <p className="text-slate-600 text-sm">Designed to withstand cyclonic winds</p>
                        <div className="h-16 w-px bg-slate-200 mx-auto mt-2"></div>
                    </div>
                    <div className="absolute top-[5%] left-[33%] w-56 text-center">
                        <h3 className="font-bold text-slate-900">Wider Views</h3>
                        <p className="text-slate-600 text-sm">Larger panel sizes</p>
                        <div className="h-16 w-px bg-slate-200 mx-auto mt-2"></div>
                    </div>
                    <div className="absolute top-[5%] left-[56%] w-56 text-center">
                        <h3 className="font-bold text-slate-900">No Rattling</h3>
                        <p className="text-slate-600 text-sm">Sturdy quality accessories & woolpile</p>
                        <div className="h-16 w-px bg-slate-200 mx-auto mt-2"></div>
                    </div>
                    <div className="absolute top-[5%] right-[8%] w-56 text-center">
                        <h3 className="font-bold text-slate-900">Noise Insulation</h3>
                        <p className="text-slate-600 text-sm">High quality gaskets & fin based woolpile</p>
                        <div className="h-16 w-px bg-slate-200 mx-auto mt-2"></div>
                    </div>

                    {/* Left Side (2 items) */}
                    <div className="absolute top-[35%] left-[2%] w-60 text-right">
                        <h3 className="font-bold text-slate-900">Rugged Reliability</h3>
                        <p className="text-slate-600 text-sm">40% stronger than standard aluminium</p>
                        <div className="h-px w-16 bg-slate-200 ml-auto mt-2"></div>
                    </div>
                    <div className="absolute top-[55%] left-[2%] w-60 text-right">
                        <h3 className="font-bold text-slate-900">Enhanced Security</h3>
                        <p className="text-slate-600 text-sm">Multi-point locking mechanisms</p>
                        <div className="h-px w-16 bg-slate-200 ml-auto mt-2"></div>
                    </div>

                    {/* Right Side (2 items) */}
                    <div className="absolute top-[35%] right-[2%] w-60 text-left">
                        <h3 className="font-bold text-slate-900">No Drips or Leaks</h3>
                        <p className="text-slate-600 text-sm">Efficient water drainage system</p>
                        <div className="h-px w-16 bg-slate-200 mr-auto mt-2"></div>
                    </div>
                    <div className="absolute top-[55%] right-[2%] w-60 text-left">
                        <h3 className="font-bold text-slate-900">Peace of Mind</h3>
                        <p className="text-slate-600 text-sm">12 year brand warranty on profiles + 5 years warranty on hardware</p>
                        <div className="h-px w-16 bg-slate-200 mr-auto mt-2"></div>
                    </div>

                    {/* Bottom Row (3 items) */}
                    <div className="absolute bottom-[5%] left-[20%] w-60 text-center">
                        <div className="h-16 w-px bg-slate-200 mx-auto mb-2"></div>
                        <h3 className="font-bold text-slate-900">Made for Indian Conditions</h3>
                        <p className="text-slate-600 text-sm">Collapsible integrated pest mesh</p>
                    </div>
                    <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2 w-60 text-center">
                        <div className="h-16 w-px bg-slate-200 mx-auto mb-2"></div>
                        <h3 className="font-bold text-slate-900">Smooth Operation</h3>
                        <p className="text-slate-600 text-sm">1L+ Cycle tested rollers & hinges</p>
                    </div>
                    <div className="absolute bottom-[5%] right-[20%] w-60 text-center">
                        <div className="h-16 w-px bg-slate-200 mx-auto mb-2"></div>
                        <h3 className="font-bold text-slate-900">High Quality Sealing</h3>
                        <p className="text-slate-600 text-sm">Silcated fin-based wool pile</p>
                    </div>
                </div>

                {/* Mobile/Tablet Layout (List View) */}
                <div className="lg:hidden flex flex-col gap-8">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-8">
                        <img
                            src="/wheninnovationmeetsperfection.webp"
                            alt="Innovation Window View"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
