import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import getAllProducts from './api/getAllProducts'
import Layout from '/components/layouts/layout' 
import Preview from '/components/products/preview'


export default function Home() {
  const apiUrl = './api/staticdata';
  const prodArray = (getAllProducts(apiUrl));
  console.log(prodArray)

  return (
      <Layout>
        <section id="intro">
          <Image alt="the bazaar" src="/bazaar.jpeg" placeholder="/product-img-placeholder.svg" width={500} height={500} priority/>
          <p>A one-stop shop for all of your magical needs! 
            All of our products our ethically sourced and sold fair trade, so you can 
            practice worry-free!</p>
        </section>
        <section id="latest">
          <ul>
           {prodArray.map((p)=> (<li key={p.id}><Preview productItem= {p}/></li>))}
          </ul>
          {/* {prodArray[0].name} */}
        </section>
        <section id="category"></section>
        <section id="collection"></section>
        <section id="whatis"></section>
      </Layout>
  )
}
