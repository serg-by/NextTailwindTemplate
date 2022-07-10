import Container from "../components/Container";

export default function Home() {
  return (
    <>
      <div  className="flex min-h-screen flex-col items-center justify-center py-2">
        <Container>
         <div className="text-center">
            <h1 className="text-6xl font-bold">
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
