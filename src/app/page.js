import UploadIcon from "../components/uploadIcon";
import DemoSection from "../components/demoSection";
import PageHeaders from "../components/pageHeaders";

export default function Home() {
  return (
      <>

       
          <PageHeaders/>

          <div className="text-center">

              <button className="bg-gradient-to-b from-blue-300 to-white-300 py-2 px-4 rounded-full inline-flex gap-2 border border-blue-700">

                  <UploadIcon/>

                  Choose file
              </button>

          </div>

          <DemoSection/>

      </>
  )
}
