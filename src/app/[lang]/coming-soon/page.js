import { TbMoodSadSquint } from "react-icons/tb";

const ComingSoonPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <TbMoodSadSquint className="size-40 mb-10" />
        <h3 className="text-2xl text-center">
          Unfortunately, we don&apos;t have any new releases scheduled for this
          month. <br />
          However, be sure to check back soon for exciting upcoming titles!
        </h3>
      </div>
    </>
  );
};

export default ComingSoonPage;
