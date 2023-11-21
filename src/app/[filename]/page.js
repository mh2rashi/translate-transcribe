'use client';
import axios from "axios";
import { useEffect, useState } from "react";


export default function FilePage({ params }) {

    const filename = params.filename;

    useEffect(() => {

        axios.get('/api/transcribe?filename=' + filename);

    }, [filename])



    return (

        <div>{filename}</div>

    );



}