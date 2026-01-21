export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Professional Journey</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {/* Job 1 (Sheopals) - LEFT */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between">
                            <div className="order-1 md:w-5/12 pl-20 md:pl-0 md:text-right">
                                <div
                                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-left md:text-right">
                                    <span
                                        className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">Present</span>
                                    <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                                    <h4 className="text-blue-600 font-semibold mb-2">Sheopals Pvt Ltd</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Creating responsive websites using HTML, CSS, JavaScript, PHP, and Laravel. Collaborating with clients
                                        to understand requirements and deliver tailored web solutions. Developing custom web applications and
                                        maintaining existing projects.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-16 h-16 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 overflow-hidden border-4 border-white">
                                <img src="/assets/mohit-koli-profile-photo.jpg" alt="Mohit Koli"
                                    className="w-full h-full object-cover opacity-80" />
                            </div>

                            <div className="order-1 md:w-5/12 pl-20 md:pl-0"></div>
                        </div>

                        {/* Job 2 (GPDM) - RIGHT */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between">
                            <div className="order-1 md:w-5/12 md:text-right"></div>

                            <div
                                className="z-20 flex items-center order-1 bg-white shadow-xl w-16 h-16 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 border-4 border-blue-100 flex justify-center items-center text-blue-600 font-bold">
                                2024
                            </div>

                            <div className="order-1 md:w-5/12 pl-20 md:pl-0">
                                <div
                                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-left">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-2">2024
                                        -
                                        2025</span>
                                    <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                                    <h4 className="text-blue-600 font-semibold mb-2">GPDM Agency LLP</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Developed custom e-commerce themes and integrated third-party apps. Improved storefront user
                                        experience
                                        and performance. Worked on e-commerce solutions and optimized online stores for better conversion
                                        rates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Job 3 (Danstring) - LEFT */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between">
                            <div className="order-1 md:w-5/12 pl-20 md:pl-0 md:text-right">
                                <div
                                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-left md:text-right">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-2">2023
                                        -
                                        2024</span>
                                    <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                                    <h4 className="text-blue-600 font-semibold mb-2">Danstring Technology</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Built and customized website themes and plugins. Maintained website performance and ensured
                                        responsive,
                                        SEO-friendly designs. Implemented custom functionality and optimized websites for speed and user
                                        experience.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="z-20 flex items-center order-1 bg-white shadow-xl w-16 h-16 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 border-4 border-blue-100 flex justify-center items-center text-blue-600 font-bold">
                                2023
                            </div>

                            <div className="order-1 md:w-5/12 pl-20 md:pl-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
