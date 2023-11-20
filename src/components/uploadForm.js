'use client';
import axios from "axios";
import UploadIcon from "../components/uploadIcon";


export default function UploadForm() {

    async function upload(ev) {
        ev.preventDefault();
       

        const files = ev.target.files;

        if (files.length > 0) {
            const file = files[0];
            const res = await axios.postForm('/api/upload', {
                file,
            });

            console.log(res.data);

        }

    }


    return (

        <label className="bg-gradient-to-b from-blue-300 to-white-300 py-2 px-4 rounded-full inline-flex gap-2 border border-blue-700 cursor-pointer">

            <UploadIcon />

            <span>Choose file</span>

            <input onChange={upload} type="file" className="hidden" />

        </label>
        
    );


}