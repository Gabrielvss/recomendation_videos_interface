import React, {useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import { List  } from 'antd';
import { PlayCircleOutlined  } from '@ant-design/icons'



export default function VideoList(){
    const [videos, setVideos] = useState([]);

useEffect(()=>{
    fetch('https://ytrec1.herokuapp.com/').then(response=>
        response.json().then(data=>{
            setVideos(data.videos.slice(0,10))
        })
    )},[])

    return(
        <Row >
            <Col span={24} style={{padding:'5vh 15%'}}>
                <List
                itemLayout="horizontal"
                dataSource={videos}
                renderItem={item => (
                    <List.Item 
                    /* actions={[<a key="list-loadmore-edit" href='/#'>Editar</a>, <a key="list-loadmore-more" href='/#'>Excluir</a>]} */
                    >
                    <List.Item.Meta
                        avatar={<PlayCircleOutlined />}
                        title={<a href={item.video_id}>{item.title}</a>}
                        description={`Score: ${item.score.toFixed(2)}`}
                    />
                    </List.Item>
                )}
                />
                    
            </Col>
        </Row>
        )
}