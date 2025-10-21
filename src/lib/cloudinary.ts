import { env } from "@/configs/env";

export async function uploadImage(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", env.VITE_CLODINARY_PRESET_NAME as string);
  formData.append("public_id", file?.name?.split(".")[0]); // allowed

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Cloudinary upload error:", data);
      return null;
    }

    return data.secure_url.replace("/upload/", "/upload/f_webp,q_auto/");
  } catch (error) {
    console.error("Upload failed:", error);
    return null;
  }
}
