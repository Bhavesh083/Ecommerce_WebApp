import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'> 
            <div className='h-banner-div'> 
              <img className='home-banner1' src='http://wallpaperstock.net/sony-headphones_wallpapers_27438_852x480.jpg' />
            </div>
           <div className='products-list'>

                <Product id='1'
                title='Lenovo IdeaPad Slim 3 AMD Athlon Silver 3050U 15.6 inch HD'
                cost={399}
                rating={2}
                img='https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg' />
                
                <Product id='2'
                title='Steelbird SBH-17 Terminator Full Face Graphic Helmet (Medium 580 MM, Glossy Fluo Neon With Clear Visor)'
                cost={35}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/71ZeA8oAr1L._SX679_.jpg' />


                <Product id='3'
                title='OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage)'
                cost={524}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/8145DElqceL._SL1500_.jpg' />

                
                <img className='home-banner2' src='https://blog.westenddj.co.uk/wp-content/uploads/2018/10/hdj-x5bt-hub-banner-2560x768.jpg' />

                
                <Product id='4'
                title='WORLD WEAR FOOTWEAR Men Casual Sports Running Shoes'
                cost={11}
                rating={3}
                img='https://images-na.ssl-images-amazon.com/images/I/71040QEdNGL._UL1280_.jpg' />
          
                <Product id='5'
                title='Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX Connectivity, Built in FM, Call Function'
                cost={9}
                rating={5}
                img='https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg' />

                <Product id='6'
                title='Vills RWS0216S Analog Blue Linear Designer Dial Mens & Boys Watch'
                cost={23}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/71uK-2cc7DL._UX679_.jpg' />

                 
                <img className='home-banner3' src='https://www.getinthemix.com/c/images/16/0245486001524562491.jpg' />


                <Product id='7'
                title='Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black'
                cost={10}
                rating={5}
                img='https://images-na.ssl-images-amazon.com/images/I/51kdFjyPRAL._SL1500_.jpg' />

                
                <Product id='8'
                title='Webelkart Artificial Rose And Gift Box'
                cost={10}
                rating={3}
                img='https://images-na.ssl-images-amazon.com/images/I/71nbLB4DvAL._SX679_.jpg' />
    
               <Product id='9'
                title='Lenovo IdeaPad Slim 3 AMD Athlon Silver 3050U 15.6 inch HD'
                cost={399}
                rating={2}
                img='https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg' />
                
                
                <img className='home-banner4' src='https://m.media-amazon.com/images/S/aplus-media/vc/e3332354-ddf1-4136-8a6c-2a634d86d280.__CR1,0,1898,587_PT0_SX970_V1___.jpg'/>


                <Product id='10'
                title='Steelbird SBH-17 Terminator Full Face Graphic Helmet (Medium 580 MM, Glossy Fluo Neon With Clear Visor)'
                cost={35}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/71ZeA8oAr1L._SX679_.jpg' />


                <Product id='11'
                title='OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage)'
                cost={524}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/8145DElqceL._SL1500_.jpg' />
                
                <Product id='12'
                title='WORLD WEAR FOOTWEAR Men Casual Sports Running Shoes'
                cost={11}
                rating={3}
                img='https://images-na.ssl-images-amazon.com/images/I/71040QEdNGL._UL1280_.jpg' />
          
                <Product id='13'
                title='Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX Connectivity, Built in FM, Call Function'
                cost={9}
                rating={5}
                img='https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg' />

                <Product id='14'
                title='Vills RWS0216S Analog Blue Linear Designer Dial Mens & Boys Watch'
                cost={23}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/71uK-2cc7DL._UX679_.jpg' />

                <Product id='15'
                title='Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black'
                cost={10}
                rating={5}
                img='https://images-na.ssl-images-amazon.com/images/I/51kdFjyPRAL._SL1500_.jpg' />

                
                <Product id='16'
                title='Webelkart Artificial Rose And Gift Box'
                cost={10}
                rating={3}
                img='https://images-na.ssl-images-amazon.com/images/I/71nbLB4DvAL._SX679_.jpg' />
                 
                 <Product id='17'
                title='Steelbird SBH-17 Terminator Full Face Graphic Helmet (Medium 580 MM, Glossy Fluo Neon With Clear Visor)'
                cost={35}
                rating={4}
                img='https://images-na.ssl-images-amazon.com/images/I/71ZeA8oAr1L._SX679_.jpg' />
 
    </div>
        </div>
    )
}

export default Home