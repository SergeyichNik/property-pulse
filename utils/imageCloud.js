import axios from "axios";

const cloudInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_IMAGE_CLOUD_API
})

const uploadImage = async (formData) => {
    return  cloudInstance.post('/upload', formData).then(res => res.data)
}

const deleteImage = async (arrayNames) => {
    return  cloudInstance.post('/delete', arrayNames).then(res => res.data);
}

export default {
    uploadImage,
    deleteImage,
}
