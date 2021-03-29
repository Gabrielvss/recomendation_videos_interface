import { Col,Image } from 'antd';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined, /* ArrowRightOutlined */   } from '@ant-design/icons'
import VideoList from '../VideoList'
import HeroImage from '../../assets/hero_image.jpg'
import HeaderImage from '../../assets/header_image.jpg'
import './styles.css'


export default function Main(){

    return(
        <Col span={24}>
        <div className='container'>
            <section className='header'>
            <a className='image-header' href="/#">  
                <Image
                    width={200}
                    src={HeaderImage}
                    style={{'borderRadius':'50%'}}
                />
            </a> 
            <div className='profile-information'>
                <p>Feito por:</p>
                <h1>Gabriel Vinícius</h1> 
                <p>Cientista de Dados em formação</p>
            </div>
            <div className='profile-contacts'>
                <a href='https://www.linkedin.com/in/gabriel-vinicius-souza/'>
                    <LinkedinOutlined style={{color:'rgb(62, 70, 91)',fontSize: '20px', marginRight: '2px'}}/>
                    Linkedin
                </a>
                <a href='https://www.instagram.com/gabrel_vss/'>
                    <InstagramOutlined style={{color:'rgb(62, 70, 91)',fontSize: '20px', marginRight: '2px'}} />
                    Instagram
                </a>
                <a href='https://github.com/gabrielvss'>
                    <GithubOutlined style={{color:'rgb(62, 70, 91)',fontSize: '20px', marginRight: '2px'}}/>
                    Github
                </a>
            </div>
            </section>
            <section className='description'>
                <Image
                    width={'100%'}
                    src={HeroImage}
                    style={{ objectFit: 'cover',maxHeight:'600px'}}
                />
                <div className='text-content'>
                    <h1>
                        Sistema de Recomendação
                    </h1>

                    <p>Esse projeto consiste em um sistema de recomendação de vídeos 
                        do youtube de acordo com as preferências do autor. Os vídeos são recomendados a 
                        partir de modelos de inteligência artificial também desenvolvidos pelo autor. A classificação 
                        é feita do resultado de três chaves de pesquisa, são elas: Machine learning, Data Science,kaggle.
                    </p>

                    {/* <a href="/#">Continue lendo <ArrowRightOutlined /></a> */}
                </div>
            </section>
            <section className='content'>
                <div className='recomendation-description'>
                    <h1>
                        Vídeos Recomendados.
                    </h1>
                    <p>
                        Esses são os top 10 vídeos segundo os classificadores, observe a pontuação (score) de cada vídeo, a classificação
                        é feita por modelos de machine learning, a api está disponível no <a href='https://ytrec1.herokuapp.com/'>Heroku</a> e 
                        o repositório no <a href='https://github.com/Gabrielvss/recomendation_videos_api'>Github</a>.
                        
                    </p>

                </div>
               
                <VideoList/>
            </section>

        </div>
        </Col>
    )

}