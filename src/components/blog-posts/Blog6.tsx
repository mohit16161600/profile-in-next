import Image from 'next/image';

export default function Blog6() {
    return (
        <>
            <section id="intro" className="mb-16">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    If you&apos;re starting your journey into web development, the first major crossroad you&apos;ll encounter is
                    choosing between <strong>Frontend</strong> and <strong>Backend</strong> development. Both are
                    high-demand career paths with excellent salaries, but they require very different mindsets and skill
                    sets.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    In this guide, I&apos;ll break down exactly what each role involves, the technologies you need to learn,
                    and—most importantly—which path is the best fit for <em>you</em>.
                </p>
            </section>

            <section id="frontend" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">1. What is Frontend Development?</h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-700 mb-6">
                        <strong>Frontend development</strong> is everything a user sees and interacts with on a website.
                        It&apos;s about combining design with logic to create smooth, responsive, and visually appealing
                        interfaces.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Core Skills You Need:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li><strong>HTML & CSS:</strong> The building blocks of the web.</li>
                        <li><strong>JavaScript:</strong> To add interactivity and logic.</li>
                        <li><strong>Frameworks:</strong> React, Vue, or Angular are industry standards.</li>
                        <li><strong>Responsive Design:</strong> Ensuring apps work on mobile and desktop.</li>
                    </ul>
                    <p className="mt-6 text-gray-600 italic">
                        Best for: People who are visual, creative, and enjoy instant gratification from seeing
                        their code come to life on the screen.
                    </p>
                </div>
            </section>

            <section id="backend" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">2. What is Backend Development?</h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-700 mb-6">
                        <strong>Backend development</strong> works behind the scenes. It powers the server, database, and
                        application logic. When you click &quot;Sign Up,&quot; the backend handles verifying your data and storing it
                        securely.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Core Skills You Need:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li><strong>Server-side Languages:</strong> Node.js, Python, PHP, Java, or Go.</li>
                        <li><strong>Databases:</strong> SQL (MySQL, PostgreSQL) or NoSQL (MongoDB).</li>
                        <li><strong>API Design:</strong> RESTful APIs or GraphQL.</li>
                        <li><strong>Security:</strong> Authentication, authorization, and data encryption.</li>
                    </ul>
                    <p className="mt-6 text-gray-600 italic">
                        Best for: Problem solvers who enjoy logic, algorithms, and system architecture more than
                        visual design.
                    </p>
                </div>
            </section>

            <section id="comparison" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">3. Frontend vs. Backend: Key Differences</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="p-4 border border-gray-700">Feature</th>
                                <th className="p-4 border border-gray-700">Frontend</th>
                                <th className="p-4 border border-gray-700">Backend</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="p-4 border border-gray-300 font-semibold bg-gray-50">Focus</td>
                                <td className="p-4 border border-gray-300">User Interface & Experience</td>
                                <td className="p-4 border border-gray-300">Logic, Data & Servers</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-gray-300 font-semibold bg-gray-50">Key Tech</td>
                                <td className="p-4 border border-gray-300">React, CSS, Tailwind</td>
                                <td className="p-4 border border-gray-300">Node.js, Python, SQL</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-gray-300 font-semibold bg-gray-50">Visuals</td>
                                <td className="p-4 border border-gray-300">High priority</td>
                                <td className="p-4 border border-gray-300">Low/None</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-gray-300 font-semibold bg-gray-50">Updates</td>
                                <td className="p-4 border border-gray-300">Fast-paced changes</td>
                                <td className="p-4 border border-gray-300">More stable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="salary" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">4. Salary & Career Growth in 2025</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Both roles are highly lucrative. In 2025, the gap between backend and frontend salaries has narrowed
                    significantly due to the increasing complexity of frontend frameworks.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg text-center shadow-lg border border-gray-200">
                        <h3 className="text-xl font-bold text-blue-600">Frontend Developer</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">$70k - $125k+</p>
                        <p className="text-sm text-gray-500 mt-2">Average Annual Salary</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg text-center shadow-lg border border-gray-200">
                        <h3 className="text-xl font-bold text-purple-600">Backend Developer</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">$80k - $135k+</p>
                        <p className="text-sm text-gray-500 mt-2">Average Annual Salary</p>
                    </div>
                </div>
            </section>

            <section id="verdict" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">5. Final Verdict: Which One Should You Choose?</h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
                    <p className="text-lg text-gray-700 mb-4">
                        There is no &quot;better&quot; choice—only the right choice for <em>you</em>.
                    </p>
                    <ul className="space-y-4 text-gray-700">
                        <li>✅ <strong>Choose Frontend</strong> if you love creativity, design, and seeing instant visual
                            results of your work.</li>
                        <li>✅ <strong>Choose Backend</strong> if you enjoy logical puzzles, optimizing systems, and working
                            with data.</li>
                        <li>🚀 <strong>The Third Path:</strong> Many developers eventually become <strong>Full Stack
                            Developers</strong>, mastering both sides to become highly versatile engineers.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
