import { useEffect, useState } from "react";

import Header from "~/components/resume/Header";
import Personal from "~/components/resume/Personal";
import Experience from "~/components/resume/Experience";
import Education from "~/components/resume/Education";
import Contact from "~/components/resume/Contact";
import Qualification from "~/components/resume/Qualification";
import Job from "~/components/resume/Job";
import Tool from "~/components/resume/Tool";
import Footer from "~/components/resume/Footer";
import FloatSocial from "~/components/resume/FloatSocial";
import Loading from "~/components/layouts/Loading";

const Resume = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />

      <div className="flex flex-wrap justify-center animate__animated animate__fadeInUp">
        <div className="w-full lg:w-full">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
            <Personal />
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Experience />
          <Education />
        </div>
        <div className="w-full lg:w-5/12">
          <Contact />
          <Qualification />
          <Job />
        </div>
        <div className="w-full">
          <Tool />
        </div>
      </div>

      <Footer />

      <FloatSocial />
    </div>
  );
};

export default Resume;
