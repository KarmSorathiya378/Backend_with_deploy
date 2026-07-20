import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteOldAvatar = async (avatarUrl) => {
    if (!avatarUrl || !avatarUrl.includes("cloudinary.com")) {
        return null;
    }

    try {
        const url = new URL(avatarUrl);
        const pathParts = url.pathname.split("/").filter(Boolean);
        const uploadIndex = pathParts.findIndex((part) => part === "upload");

        if (uploadIndex === -1) {
            return null;
        }

        let publicIdParts = pathParts.slice(uploadIndex + 1);

        if (publicIdParts[0]?.startsWith("v")) {
            publicIdParts = publicIdParts.slice(1);
        }

        if (publicIdParts.length === 0) {
            return null;
        }

        const publicId = publicIdParts.join("/").replace(/\.[^.]+$/, "");
        const response = await cloudinary.uploader.destroy(publicId);

        return response;
    } catch (error) {
        console.error("Error deleting old avatar from Cloudinary:", error);
        return null;
    }
};

export { deleteOldAvatar };
