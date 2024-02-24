import Link from "next/link";

const MainPage = () => {
    return (
        <div>
            <h1 className="text-3xl">Home Page</h1>
            <Link href={"/properties"}>Go to Properties Page</Link>
        </div>
    )
}

export default MainPage;
