import DemoSection from "../components/demoSection";
import PageHeaders from "../components/pageHeaders";
import UploadForm from "../components/uploadForm";


export default function Home() {
   

  return (
      <>
          <PageHeaders/>

          <div className="text-center">

             <UploadForm />

          </div>

          <DemoSection/>

      </>
  )
}
