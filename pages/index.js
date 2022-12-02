import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getAllProducts from './api/getAllProducts'
import Layout from '../layouts/layout' 

export default function Home() {

  return (

      <Layout>
        <div>
            {getAllProducts()}
        </div>
      </Layout>

  )
}
