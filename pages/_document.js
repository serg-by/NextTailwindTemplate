import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>        
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />       
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}