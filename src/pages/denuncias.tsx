import Head from 'next/head'
import Image from 'next/image'
import Column from '../components/Grid/Column'
import Row from '../components/Grid/Row'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Mapa from '../components/Mapa'
import styles from '../styles/Home.module.css'
import { Container } from './styles'

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='header'>
                <div className="header__logo">eeeeeeeee</div>
                <div className="header__menu-mobile">
                    <button>a</button>
                    <button>b</button>
                    <button>c</button>
                </div>
                <div className="header__menu">
                    <input type="text" placeholder='Pesquise uma cidade' className='header__pesquisar' />
                    <div className='header__container-select'>
                        <select className='header__select' name="" id="">
                            <option value="lorem">lorem</option>
                            <option value="ipsum">ipsum</option>
                            <option value="dolor">dolor</option>
                        </select>
                        <select className='header__select' name="" id="">
                            <option value="lorem">lorem</option>
                            <option value="ipsum">ipsum</option>
                            <option value="dolor">dolor</option>
                        </select>
                        <select className='header__select' name="" id="">
                            <option value="lorem">lorem</option>
                            <option value="ipsum">ipsum</option>
                            <option value="dolor">dolor</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='container-main'>
                <div className='mapa'>casdas</div>
                <div className='section'>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card__imagem"></div>
                        <div className="card__meta">
                            <div className="card__subtitulo">Lorem ipsum</div>
                            <div className="card__titulo">Esgoto a céu aberto</div>
                            <div className="card__categoria">saneamento</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
  )
}
