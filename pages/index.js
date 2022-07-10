import Container from "../components/base/Container";

export default function Home() {
  return (
    <>
      <div  className="flex flex-col items-center justify-center py-2">
        <Container>
         <div className="text-center">
            <h1 className="text-6xl font-bold text-black dark:text-white">
              Welcome to{" "}
              <a className="text-blue-600" href="https://nextjs.org">
                Next.js!
              </a>
            </h1>
         </div>
        </Container>
      </div>      
    </>
  );
}
