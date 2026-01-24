import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // delete local file after successful upload
    await fs.unlink(localFilePath);

    console.log("Uploaded to Cloudinary:", response.secure_url);
    return response;

  } catch (error) {
    console.error("Cloudinary upload error:", error.message);

    // attempt cleanup if file exists
    try {
      await fs.unlink(localFilePath);
    } catch (cleanupError) {
      console.warn("Local file cleanup failed:", cleanupError.message);
    }

    return null;
  }
};

export { uploadOnCloudinary };
