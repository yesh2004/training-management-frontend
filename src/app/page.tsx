import Nav from '@/components/Nav';
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { WavyBackground } from "@/components/ui/wavy-background";
import { GraduationCap } from 'lucide-react';

function Page() {
  return (
    <div className=' w-full  relative'>
      <WavyBackground  
        speed='fast' 
        backgroundFill="#1A1A1A" 
        waveOpacity={0.4} 
        waveWidth={200} 
        blur={4} 
         className='w-full m-0 '
        colors={["#5842a3", "#4e5d94", "#8c7dd1", "#a597e6", "#d1cde8"]}
      >
      
      {/* Navbar */}
      <Nav/>

      <section className='h-[400px] w-full flex items-center justify-center text-center px-5 mx-auto'>
        <div className='w-full text-center'>
          <h1 className='text-5xl font-extrabold uppercase text-white drop-shadow-md text-center '>
           Training HUB <span className='text-[72px]'>🎓</span>
          </h1>
          <Button className='uppercase text-white bg-[#6d54cf] hover:bg-[#5842a3] mt-7 text-xl' size={'lg'}>
            <a href="/login">
            Log In
            </a>
          </Button>
        </div>
      </section>
      
      </WavyBackground>

      {/* Features Section */}
      <section className='text-black p-10 mx-auto'>
        <div className="text-center">
          <h1 className='text-5xl font-extrabold uppercase'>Powerful Training Management Features</h1>
          <p className='text-gray-600 mt-2'>Everything you need to create, manage, and track effective training programs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            
            {/* Card 1 */}
            <Card className='w-full h-[300px] p-5 pt-10 shadow-lg'>
              <CardTitle className='text-xl text-center flex flex-col items-center'>
                <Icon />
                Mentor-Trainee Matching
              </CardTitle>
              <CardDescription className='text-center text-gray-700'>
                Easily pair mentors with trainees based on skills, goals, and availability to maximize learning outcomes.
              </CardDescription>
            </Card>

            {/* Card 2 */}
            <Card className='w-full h-[300px] p-5 pt-10 shadow-lg'>
              <CardTitle className='text-xl text-center flex flex-col items-center'>
                <Icon />
                Progress Tracking
              </CardTitle>
              <CardDescription className='text-center text-gray-700'>
                Monitor trainee progress in real time with interactive dashboards and analytics.
              </CardDescription>
            </Card>

            {/* Card 3 */}
            <Card className='w-full h-[300px] p-5 pt-10 shadow-lg'>
              <CardTitle className='text-xl text-center flex flex-col items-center'>
                <Icon />
                Course Management
              </CardTitle>
              <CardDescription className='text-center text-gray-700'>
                Create, edit, and manage training courses seamlessly with our user-friendly platform.
              </CardDescription>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}

// Reusable Icon Component
const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="58"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#6d54cf] mb-3"
  >
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

export default Page;
