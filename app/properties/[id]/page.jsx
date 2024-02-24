"use client"

import {useParams, useRouter, useSearchParams} from "next/navigation";

const DynamicPage = () => {
    const router = useRouter();
    const {id} = useParams();
    const searchParams = useSearchParams();

    const name = searchParams.get('name')
    return (
        <div className="flex-row pl-2 pt-2">
            <button onClick={() => router.push('/')}  className="bg-blue-500 py-2 px-4 rounded">go to home</button>
            <div className="bg-red-200 mt-2 py-2 px-4 rounded">{name}</div>
        </div>
    );
};

export default DynamicPage;
