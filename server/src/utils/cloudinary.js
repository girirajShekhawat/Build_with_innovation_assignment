import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
  cloud_name:process.env.CLOUDNIARY_CLOUD_NAME, 
  api_key:process.env.CLOUDNIARY_API_KEY, 
  api_secret:  process.env.CLOUDNIARY_API_SECRET
});

// this functionality is executed when file is already on the server and the localfilePath is the path of the file on the server

const fileUpload= async (localfilePath) => { 

try {
 const fileUploadResponse= await cloudinary.uploader.upload(localfilePath,{
    resource_type:'auto'
  });

  console.log("file has been uploaded successfully",fileUploadResponse.url)
  return  fileUploadResponse;

} catch (error) {
    // this will unlink(remove) the file from the server as the operation got failed and unlinkSync will do it in the syncronus method
    fs.unlinkSync(localfilePath);
    console.log("!!!file upolaod error in the cloudniary",error);
    return null;
}
}

export default fileUpload; 


