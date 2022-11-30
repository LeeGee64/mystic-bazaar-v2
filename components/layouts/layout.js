import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export const siteTitle = 'Library of Solomon';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="A sample library navigation app built with Next.js and MongoDB."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header className={styles.header}>
            
      {home ? (
          <>
            <h1 id="top" className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <h1 id="top" className={utilStyles.heading2XL}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h1>
          </>
        )}
      <nav className= {styles.nav}>
          <ul className= {styles.navList}>
            <li id="Home" className= {styles.navItem}>
              <Link href= '/'>
                  <a className= {styles.navName}>Home</a>
              </Link>
            </li>
            <li id="BookSearch" className= {styles.navItem}>
              <Link href= '/booksearch'>
                  <a className= {styles.navName}>Search</a>
              </Link>
            </li>
            <li id="Directory" className= {styles.navItem}>
              <Link href= '/directory'>
                  <a className= {styles.navName}>Directory</a>
              </Link>
            </li>
            <li id="About" className= {styles.navItem}>
              <Link href= '/about'>
                  <a className= {styles.navName}>About</a>
              </Link>
            </li>
          </ul>
      </nav>
      </header>
    

      <main className= {styles.main}>{children}</main>
      
      
      <footer id="footer" className={styles.footer}>
        <div className={styles.linkList}>
          <a className={utilStyles.logo} href="https://twitter.com/LeeGee64">
          <Image
                priority
                src="/Images/logos/2021-Twitter-logo-blue.png"
                height= {30}
                width= {30}
                className={utilStyles.logo}
                alt="Twitter"
              />
            </a>
          <a className={utilStyles.logo} href="https://www.instagram.com/who_is_lee888/">
            <Image
                priority
                src="/Images/logos/Instagram_Glyph_Gradient.png"
                height= {30}
                width= {30}
                className={utilStyles.logo}
                alt="Instagram"
              />
            </a>
          <a className={utilStyles.logo} href="https://github.com/LeeGee64/occult-library-sample">
            <Image
                priority
                src="/Images/logos/GitHub-Mark-Light-64px.png"
                height= {30}
                width= {30}
                className={utilStyles.logo}
                alt="GitHub"
              />
            </a>
          <a className={utilStyles.logo} href="https://www.linkedin.com/in/leland-gill">
            <Image
                priority
                src="/Images/logos/In-Blue-34.png"
                height= {30}
                width= {30}
                className={utilStyles.logo}
                alt="LinkedIn"
              />
            </a>
          </div>
      </footer>
    </div>
  );
}
