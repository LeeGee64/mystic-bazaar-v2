import Head from 'next/head';
import Image from 'next/image';
// import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';



export const siteTitle = 'Mystic Bazaar';


export default function Layout({children}) {

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="A sample e-commerce site built with Next.Js."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header class="py-10 flex flex-col justify-center space-y-3 bg-fuchsia-500 sm:flex-row sm:justify-between sm:px-20">
            
      <h1 class= "self-center text-center mx-5" id="top" >
        <Link href="/">
          {siteTitle}
        </Link>
      </h1>
      <nav class="self-center">
          <ul class="flex flex-row space-x-2">
            <li class="sm:m-5" id="Home">
              <Link href= '/'>
               Home
              </Link>
            </li>
            <li class="sm:m-5" id="Search">
              <Link href= '/search'>
                  Search
              </Link>
            </li>
          </ul>
      </nav>
      </header>
    

      <main class="px-10">{children}</main>
      
      
      <footer class= "py-[3rem] bg-black">
        <div class= "flex flex-row justify-center gap-10" id="footer">
          <a href="https://twitter.com/LeeGee64">
          <Image
                priority
                src="/Images/logos/2021-Twitter-logo-blue.png"
                height= {30}
                width= {30}
                alt="Twitter"
              />
            </a>
          <a href="https://www.instagram.com/who_is_lee888/">
            <Image
                priority
                src="/Images/logos/Instagram_Glyph_Gradient.png"
                height= {30}
                width= {30}
                alt="Instagram"
              />
            </a>
          <a  href="https://github.com/LeeGee64/occult-library-sample">
            <Image
                priority
                src="/Images/logos/GitHub-Mark-Light-64px.png"
                height= {30}
                width= {30}
                alt="GitHub"
              />
            </a>
          <a href="https://www.linkedin.com/in/leland-gill">
            <Image
                priority
                src="/Images/logos/In-Blue-34.png"
                height= {30}
                width= {30}
                alt="LinkedIn"
              />
            </a>
          </div>
      </footer>
    </div>
  );
}
