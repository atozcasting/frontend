
import Carousel from "@/components/Home/Carousel";
import { raleway, roboto } from "./fonts";
import Popular from "@/components/Home/Popular";
import Cta from "@/components/Home/Cta";
import Featured from "@/components/Home/Featured";
import FeaturedProfiles from "@/components/Home/FeaturedProfiles";
import Testimonial from "@/components/Home/Testimonial";
import Foocontent from "@/components/Home/Foocontent";


export default function Home() {
  return (
    <>
      <Carousel />
      <div className="max-w-[1000px] mx-auto xs:pt-[80px] p-0">
        <h1 className={`${raleway.className} text-4xl text-center`}>A2z solution for your casting needs</h1>
        <p className="text-center p-3 mb-6">A2zcasting™ is a talent-hiring platform for the Film and Media Industry.</p>
        <div className="xs:flex xs:flex-col xs:p-2 sm:flex sm:flex-row md:flex md:flex-row gap-3 py-3">
          <div className="items-center text-center">
            <span className="rounded-[50%] bg-[#fae4cf] text-[72px] leading-[96px] px-[30px] ">1</span>
            <p className="text-2xl font-medium mt-2">Create Your Portfolio</p>
            <p>Compile your best work to showcase skills, experience, and accomplishments for potential clients or employers.</p>
          </div>
          <div className="items-center text-center">
            <span className="rounded-[50%] bg-[#efd4ff] text-[72px] leading-[96px] px-[30px]">2</span>
            <p className="text-2xl font-medium mt-2">Apply for Auditions</p>
            <p>Submit applications to audition for roles, showcasing your talents and passion for performance opportunities.</p>
          </div>
          <div className="items-center text-center">
            <span className="rounded-[50%] bg-[#c7d6ff] text-[72px] leading-[96px] px-[30px]">3</span>
            <p className="text-2xl font-medium mt-2">Get Hired</p>
            <p>Successfully land a job by demonstrating your qualifications, experience, and suitability for the desired position</p>
          </div>
        </div>

        <div className="text-center p-3 ">
          <a href="" className={`${roboto.className} flex justify-center items-center text-primary font-medium hover:bg-gray-100 px-10 py-2 rounded text-[12px]`}>LEARN THE APPLYING PROCESS <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></a>
        </div>
        <p className="flex xs:flex-col sm:flex-row items-center justify-center">Are you a recruiter? <a className="home_link2 px-2 text-blue-600 hover:text-primary" href="/cms/howitworks">Learn how to hire the best talents !</a></p>
      </div>
      <Popular />
      <Cta />
      <Featured />
      <FeaturedProfiles />
      <Testimonial />

      <Foocontent />
    </>

  );
}
