import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.img`
margin: ${props => props.margin}
border: 3px solid #000000;
padding: 10px 10px 10px 10px;
`

const Border = styled.div`
border: 5px solid #000000;
box-sizing: border-box;
`
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}
border: ${props => props.border}
`

const Texthead = styled.div`
width: ${props => props.width}
height: ${props => props.height}
padding-bottom: 200px;
margin: ${props => props.margin}


font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: center;

color: #000000;
`

const Text = styled.div`
width: 649px;
height: 319px;
margin: ${props => props.margin}

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: center;
text-indent: 20px;

color: #000000;
`
const Rectangle = styled.div`
width: 357px;
height: 243px;
background: ${props => props.background}
margin: ${props => props.margin}
`

export default class Hunter extends Component {
    render() {
        return (
            <div>
                <Texthead height="112px" width="850px" margin="0px 0px 0px 100px"><b>Things That Are A Threats To Red Pandas</b></Texthead>
                <Img src="images\snowleopard.png" alt="snowleopard" height="245px" width="245px" margin="0px 150px 0px 50px"/>
                <Img src="images\mustelid.png" alt="mustelid" height="245px" width="245px" margin="0px 150px 0px 0px"/>
                <Img src="images\human.png" alt="human" height="245px" width="245px" margin="0px 0px 0px 0px"/>
                <Texthead height="112px" width="500px" margin="50px 0px 0px -75px">เสือดาวหิมะ</Texthead>
                <Texthead height="112px" width="500px" margin="-200px 0px 0px 325px">เพียงพอน</Texthead>
                <Texthead height="112px" width="500px" margin="-200px 0px 0px 725px">มนุษย์</Texthead>
                 <Img src="images\redpanda5.png" alt="redpanda5" height="526px" width="335px" margin="0px 0px 0px 200px"/> 
                 <Rectangle background="#009B68" margin="-400px 50px 0px 200px" /> 
                
                 <Rectangle background="#F78A68" margin="-250px 50px 0px 650px" /> 
                 <Img src="images\redpanda6.png" alt="redpanda6" height="449px" width="487px" margin="-350px 0px 0px 600px"/>
                <Text margin="75px 0px 0px 250px">หมีแพนด้าสีแดงจะพยายามหลบหนีโดยการวิ่งขึ้นไปบนหินหรือต้นไม้</Text>
                <Text margin="75px 0px 0px 250px">หรือพยายามข่มขู่โดย</Text>
                <Texthead height="112px" width="1200px" margin="-100px 0px 50px 0px"><b>เหตุผลที่ทำไมแพนด้าแดงจึงเป็นสัตว์ใกล้สูญพันธุ์ </b></Texthead>
                <Text margin="-75px 0px 50px 250px">แพนด้าแดงกำลังเผชิญกับภัยคุกคามหลายอย่างรวมถึงการตัดไม้ทำลายป่าไม้ไผ่เพิ่มความตายจากโรคไข้หัดสุนัขเนื่องจากการบุกรุก ของมนุษย์การสูญเสียที่อยู่อาศัยและการลักลอบล่าสัตว์ </Text>
                
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food1"/>
                <Texthead height="62px" width="499px"margin="-150px 0px 0px 445px">Deforestation of Bamboo </Texthead>
                
                <Icon src="images\food.jpg" margin="-100px 300px 0px 350px" alt="food2"/>
                <Texthead height="62px" width="499px"margin="-100px 0px 0px 370px">Lost of Habitats </Texthead>
                
                <Icon src="images\food.jpg" margin="-100px 300px 0px 350px" alt="food3"/>
                <Texthead height="62px" width="499px"margin="-100px 0px 0px 310px">Poaching</Texthead>
            </div>
        )
    }
}
