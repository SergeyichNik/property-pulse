import connectDB from "../../../config/database";
import Property from "../../../models/Property";
import {getSessionUser} from "../../../utils/getSessionUser";
import {$api} from "../../../api/config";
import axios from "axios";
import {imageUpload} from "../../../utils/imageUpload";

export const GET = async () => {
    try {
        await connectDB();
        const properties = await Property.find({});

        return new Response(JSON.stringify(properties), {status: 200})
    } catch (e) {
        return new Response('Something went wrong', {status: 500})
    }
}

export const POST = async (request) => {
    try {
        await connectDB();
        const formData = await request.formData();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', {status: 401});
        }

        const {userId} = sessionUser;

        const amenities = formData.getAll('amenities');
        const images = formData.getAll('images').filter((image) => image.name !== '');


        const imageUploadPromises = [];

        for (let image of images) {

            const formData = new FormData();
            formData.append('images', image);

            const uploadedImageUrl = await imageUpload(image);

            imageUploadPromises.push(uploadedImageUrl)
        }


        const propertyData = {
            type: formData.get('type'),
            name: formData.get('name'),
            description: formData.get('description'),
            location: {
                street: formData.get('location.street'),
                city: formData.get('location.city'),
                state: formData.get('location.state'),
                zipcode: formData.get('location.zipcode'),
            },
            beds: formData.get('beds'),
            baths: formData.get('baths'),
            square_feet: formData.get('square_feet'),
            amenities,
            rates: {
                weekly: formData.get('rates.weekly'),
                monthly: formData.get('rates.monthly'),
                nightly: formData.get('rates.nightly.'),
            },
            seller_info: {
                name: formData.get('seller_info.name'),
                email: formData.get('seller_info.email'),
                phone: formData.get('seller_info.phone'),
            },
            // images,
            owner: userId,
        };

        const uploadedImages = await Promise.all(imageUploadPromises);
        propertyData.images = uploadedImages;

        const newProperty = new Property(propertyData);
        await newProperty.save();

        return Response.redirect(
            `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
        );
        return new Response('Uploaded', {status: 200});
    } catch (error) {
        console.log(error)
        return new Response('Failed to add property', {status: 500});
    }
};
