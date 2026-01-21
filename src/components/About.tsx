export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden" itemScope itemType="https://schema.org/Person">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-50 rounded-full blur-3xl opacity-50"></div>

            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 to-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <div
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100/50 text-primary-700 text-sm font-medium mb-8">
                            <span className="mr-2">👋</span> About The Developer
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Crafting Digital Experiences with <span className="text-primary-600">Precision</span> & <span
                                className="text-secondary-600">Passion</span>.
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                I'm <strong className="text-gray-900" itemProp="name">Mohit Koli</strong>, a passionate and dedicated
                                <strong>Web Developer</strong> and <strong>Full Stack Developer</strong> with over 2 years of professional
                                experience. I specialize in designing, developing, and maintaining responsive websites and web
                                applications that drive results. Welcome to my professional portfolio at <strong
                                    className="text-primary-600">mohitkoli.info</strong>.
                            </p>
                            <p>
                                My expertise spans modern frontend and backend technologies, allowing me to deliver end-to-end solutions
                                that are functionally robust and visually stunning. As a professional developer, I bring a unique blend of
                                technical skill and creative problem-solving to every project.
                            </p>
                            <p>
                                Currently serving as a <strong>Web Developer</strong> at <span className="font-semibold text-gray-900"
                                    itemProp="worksFor">Sheopals Pvt Ltd</span>, I engineer responsive dashboards and platforms using HTML,
                                PHP, Laravel, and React. I hold a <strong>Bachelor's Degree in Computer Science & Engineering</strong>
                                from BPIT, providing me with structured software engineering principles.
                            </p>
                            <div className="pt-4">
                                <p className="italic text-gray-500 border-l-4 border-primary-500 pl-4">
                                    "Whether you're searching for 'Mohit Koli' or 'mohitkoli.info', you've found a partner dedicated to your
                                    digital success."
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#contact"
                                className="px-7 py-3.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Hire Me</a>
                            <a href="#experience"
                                className="px-7 py-3.5 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md">View
                                Journey</a>
                        </div>
                    </div>

                    {/* Visual / Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6 mt-12">
                            <div className="bg-primary-50/80 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border border-primary-100">
                                <div className="text-4xl font-bold text-primary-600 mb-2">02+</div>
                                <div className="text-sm font-medium text-gray-600">Years of Experience</div>
                            </div>
                            <div className="bg-secondary-50/80 p-6 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 border border-secondary-100">
                                <div className="text-4xl font-bold text-secondary-600 mb-2">20+</div>
                                <div className="text-sm font-medium text-gray-600">Projects Delivered</div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-emerald-50/80 p-6 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 border border-emerald-100">
                                <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                                <div className="text-sm font-medium text-gray-600">Client Satisfaction</div>
                            </div>
                            <div className="bg-orange-50/80 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border border-orange-100">
                                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                                <div className="text-sm font-medium text-gray-600">Support & Maintenance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
