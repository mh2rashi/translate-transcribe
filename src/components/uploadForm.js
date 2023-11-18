'use client';
import UploadIcon from "../components/uploadIcon";


export default function UploadForm() {

    function upload(ev) {
        ev.preventDefault();
        console.log(ev);

        const files = ev.target.files;

        if (files.length > 0) {
            const file = files[0];
        }

    }


    return (

        <label className="bg-gradient-to-b from-blue-300 to-white-300 py-2 px-4 rounded-full inline-flex gap-2 border border-blue-700 cursor-pointer">

            <UploadIcon />

            Choose file

            <input onChange={upload} type="file" className="hidden" />
        </label>
        
    );


}