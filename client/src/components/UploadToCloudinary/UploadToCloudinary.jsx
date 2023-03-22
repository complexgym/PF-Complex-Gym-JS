import { useEffect, useRef, useState } from "react";

export default function UploadToCloudinary({onUpload}){
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    const [urlImg, setUrlImg] = useState("")

    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloud_name: "dpxucxgwg",
            upload_preset: "gp0cjncm",
            showAdvancedOptions: true
        }, function(err, res){
            setUrlImg(res);
            if(res.event==="success"){
                onUpload(res)
            }
        })
    }, [])
    
    return(
        <div className="flex pb-4">
            <button className="border-2 border-gray-300 border-dashed px-8 py-2 rounded-md flex items-center"
            onClick={()=>{
                widgetRef.current.open()
                onUpload(urlImg)
            }}>
                <img className="w-8 mr-2" src="https://res.cloudinary.com/dpxucxgwg/image/upload/v1679357831/test_complex/cmayezl0uwrnd8omq7fi.png" alt="image icon"/>
                <p>Presione para subir imagen</p>
            </button>
        </div>
    )
}
