import React from 'react'
import GraphicsProj1 from "../../../src/assets/img/img_graphic_takoyaki.png"
import CloudImg from "../../../src/assets/img/img_cloud.webp"

import Sticker1 from "../../../src/assets/img/img_sticker1.webp"
import Sticker2 from "../../../src/assets/img/img_sticker2.webp"
import Sticker3 from "../../../src/assets/img/img_sticker3.webp"
import Sticker4 from "../../../src/assets/img/img_sticker4.webp"
import Sticker5 from "../../../src/assets/img/img_sticker5.webp"
import Sticker6 from "../../../src/assets/img/img_sticker6.webp"
import Sticker7 from "../../../src/assets/img/img_sticker7.webp"
import Sticker8 from "../../../src/assets/img/img_sticker8.webp"
import Sticker9 from "../../../src/assets/img/img_sticker9.webp"
import Sticker10 from "../../../src/assets/img/img_sticker10.webp"
import Sticker11 from "../../../src/assets/img/img_sticker11.webp"
import Sticker12 from "../../../src/assets/img/img_sticker12.webp"



const GraphicsProjects = () => {
    const stickers = [
        {
            id:1,
            sticker:'Banana Cat',
            img:Sticker1,
        },
         {
            id:2,
            sticker:'Bruh',
            img:Sticker2,
        },
         {
            id:3,
            sticker:'Huh Cat',
            img:Sticker3,
        },
         {
            id:4,
            sticker:'uwu',
            img:Sticker4,
        },
         {
            id:5,
            sticker:'uwa',
            img:Sticker5,
        },
         {
            id:6,
            sticker:'catborger',
            img:Sticker6,
        },
         {
            id:7,
            sticker:'borgier',
            img:Sticker7,
        },
         {
            id:8,
            sticker:'lilac',
            img:Sticker8,
        },
         {
            id:9,
            sticker:'yellow',
            img:Sticker9,
        },
         {
            id:10,
            sticker:'9 lives',
            img:Sticker10,
        },
         {
            id:11,
            sticker:'stary',
            img:Sticker11,
        },
         {
            id:12,
            sticker:'you are loved',
            img:Sticker12,
        }
       
        
    ]
  return (
    <div className='c-projects-content__wrapper'>
        <div className = 'c-projects-content__graphic'>
            <img src={GraphicsProj1} alt="Takoyaki" />
            <div className = 'c-projects-content__stickers'>
                <img src={CloudImg} alt="Cloud" className = 'c-stickers__cloud cloud-slow'/>
                <h2>02 Stickers</h2>
                <ul>
                    {stickers.map((sticker) => (
                        <li id = {sticker.id}>
                            <img src={sticker.img} alt={sticker.sticker} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default GraphicsProjects
