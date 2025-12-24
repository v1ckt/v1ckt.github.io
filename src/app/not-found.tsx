import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className='fixed flex flex-col items-center justify-center gap-4 z-[99999999] text-center bg-main-bg px-16'
      style={{
        width: "100vw",
        height: "100vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
      <div
        className='w-full h-full fixed top-0 left-0 z-[-1] flex items-center justify-center'
        style={{
          opacity: 0.1,
        }}>
        <h1
          className='mb-[25vmin] mr-[1rem] text-extrabold'
          style={{
            backgroundImage:
              "linear-gradient(to top, var(--main-bg), var(--title))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.5,
            fontSize: "50vmin",
          }}>
          404
        </h1>
      </div>
      <h1 className='text-title'>Oops!</h1>
      <h4 className='text-text'>
        It seems that the page you&apos;re looking for can&apos;t be found.
        <br className='hidden md:flex' /> Please, consider going back to{" "}
        <Link href='/' className='text-[21.6px] md:text-2xl text-accent'>
          home page
        </Link>
        .
      </h4>
    </div>
  );
}
