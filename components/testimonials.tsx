import Image from 'next/image'
import TestimonialImage from '@/public/images/whatisgamification_hero.jpg'

export default function Testimonials() {
  return (
    <section className="relative" id = "gam">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Gamification</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Incorporating elements of games into the learning process (gamification) was gaining popularity as a means to increase student motivation and engagement.</p>
          </div>

          {/* Points about Gamification and Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl mx-auto mt-8 text-gray-700">
            <div className="md:w-1/2 md:pr-8 mb-4">
              <ul className="list-disc pl-6">
                <li className="mb-4">
                  <p className="text-lg font-semibold">Increased Student Engagement:</p>
                  <p>Gamification captivates students by introducing game-like elements such as points, rewards, and challenges, making the learning experience more interactive and enjoyable.</p>
                </li>
                <li className="mb-4">
                  <p className="text-lg font-semibold">Motivation and Goal-setting:</p>
                  <p>Game-inspired features encourage students to set and achieve goals. Progress tracking, badges, and levels create a sense of accomplishment and motivate continuous learning.</p>
                </li>
                <li className="mb-4">
                  <p className="text-lg font-semibold">Fostering Healthy Competition:</p>
                  <p>Competitive elements in gamification can foster healthy competition among students, promoting teamwork and a positive learning environment.</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 text-center">
              <div className="rounded-full overflow-hidden border-4 border-blue-200 inline-block mb-4">
                <Image src={TestimonialImage} alt="Testimonial Image" width={400} height={500} className="rounded" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
