import axios from "axios";

export const imageUpload = async (formData) => {
    await axios.post('http://localhost:3001/upload', formData).then(res => res.data)
}
