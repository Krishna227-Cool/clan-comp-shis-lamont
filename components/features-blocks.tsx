import Techie from '@/public/images/tech.png'
import Image from 'next/image'
export default function FeaturesBlocks() {
  return (
    <section className="relative" id = "tie" data-aos="fade-up">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
  <h2 className="h2 mb-4">Technology Integration</h2>
  <p className="text-xl text-gray-600">The integration of technology in education continued to grow, with a focus on online learning platforms, educational apps, and virtual reality. The COVID-19 pandemic further accelerated the adoption of online and blended learning models.</p>
</div>

{/* Three points about technology integration */}
<div className="max-w-3xl mx-auto text-left mb-8">
  <ul className="list-disc pl-6">
    <li className="mb-4">
      <p className="text-lg font-semibold">Enhanced Accessibility:</p>
      <p className="text-gray-600">Technology integration has improved accessibility to educational resources, breaking down geographical barriers and providing students with access to high-quality content from anywhere in the world.</p>
    </li>
    <li className="mb-4">
      <p className="text-lg font-semibold">Interactive Learning Tools:</p>
      <p className="text-gray-600">The proliferation of educational apps and interactive learning tools has transformed traditional teaching methods. Students can engage with content through gamified experiences, simulations, and multimedia, enhancing their understanding and retention of information.</p>
    </li>
    <li className="mb-4">
      <p className="text-lg font-semibold">Virtual Reality in Education:</p>
      <p className="text-gray-600">The integration of virtual reality (VR) technology has opened new possibilities for immersive learning experiences. Students can explore historical landmarks, conduct virtual experiments, and engage in simulations, providing a more engaging and memorable educational journey.</p>
    </li>
  </ul>
</div>

{/* Image */}
<Image className="md:max-w-none mx-auto rounded" src={Techie} width={900} height="1000" />
        </div>
      </div>
    </section>
  )
}