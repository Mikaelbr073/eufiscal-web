import Head from 'next/head'
import Image from 'next/image'
import Column from '../components/Grid/Column'
import Container from '../components/Grid/Container'
import Row from '../components/Grid/Row'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container type='fluid' margin={80}>
        <Row gutter={16}>
          
          <Column sm={8} md={4} lg={8} xl={4} xxl={12}>
            <Header />
          </Column>
          
          <Column sm={8} md={4} lg={8} xl={4} xxl={12}>
            <HeroSection />
          </Column>

          <Column sm={8} md={4} lg={8} xl={4} xxl={6}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>12</div>
          </Column>
          <Column sm={4} md={8} lg={4} xl={8} xxl={4}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>1</div>
          </Column>
          <Column sm={4} md={8} lg={4} xl={8} xxl={2}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>1</div>
          </Column>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>1</div>
          </Column>
        </Row>
      </Container>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
