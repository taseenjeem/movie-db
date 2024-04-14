import Image from "next/image";
import Link from "next/link";

const InvalidMovieDetail = () => {
  return (
    <>
      <div className="flex items-center min-height-screen">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 dark:text-[#EEEEEE]/60">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-9xl text-primary font-dark font-extrabold mb-8">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we couldn&apos;t find the the movie you&apos;re looking for
            </p>
            <Link
              href="/"
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-black border border-transparent rounded-lg focus:outline-none bg-primary"
            >
              Back to homepage
            </Link>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <Image
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className="w-full"
              height={100}
              width={100}
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvalidMovieDetail;
