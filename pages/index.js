import React from 'react'
import { Flex,Heading,Input,Button } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import styles from 'sample/styles/Home.module.css'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { GiHamburgerMenu } from 'react-icons/gi';

import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';




import { AiFillCaretDown } from 'react-icons/ai';
// import { AiOutlineTwitter } from 'react-icons/ai';



var $ = require( "jquery" );
var i=0,links=0;
function index() {

  function togglelinks(){
    const elem=document.getElementById("linksdiv");
    if(links==0){
      elem.style.transform="scale(1,1)";
      links=1;
    }
    else{
      elem.style.transform="scale(1,0)";
      links=0
    }
  }

  // if (typeof window !== "undefined") {
  //   $(document).ready(function(){
  //     $("#links").hover(function(){
  //       $("#linksdiv").css({"height":"200px"});
  //       }, function(){
  //       $("#linksdiv").css({"height":"0px"});
  //     });
  //   });

  // }
  function closeham(){
    const elem=document.getElementById('hammenu');
    elem.style.transform="scale(1,0)";
    i=0;
  }
  function switchhammenu(){
    const elem=document.getElementById('hammenu');
      if(i==0){
        elem.style.transform="scale(1,1)";
        i=1;
      }
      else{
        elem.style.transform="scale(1,0)";
        i=0;
      }
  }
  function openDiv1(){
      const elem1=document.getElementById("s1");
      const elem2=document.getElementById("s2");

      b1.style.background="black";
      b2.style.background="none";
      elem1.style.display="grid";
      elem2.style.display="none";
  }
  function openDiv2(){
    const elem1=document.getElementById("s1");
      const elem2=document.getElementById("s2");
      elem2.style.display="grid";
      elem1.style.display="none";
      b2.style.background="black";
      b1.style.background="none";
  }


  return (
    <div>
      {/* Navbar */}
    <Flex 
    height={"60px"} 
    width={"100vw"} 
    bgGradient='linear(to-r, green.300, green.600)' 
    alignItems={"center"}
    p={"0px 5%"} 
    position={"fixed"}
    zIndex={20}
    justifyContent={"right"}>

    <div className={styles.logodiv}>
      <Image src={'/logo.png'} width={1000} height={1000} alt='logo' />
    </div>

      <Link className={styles.navlink} href={'#home'}>Home</Link>
      <Link className={styles.navlink} href={'#about'}>About</Link>
      <Link className={styles.navlink} href={'#issues'}>Issues</Link>
      <Link className={styles.navlink} href={'#media'}>Media</Link>
      <button onClick={togglelinks} className={styles.navlink}>Links <AiFillCaretDown style={{"display":"inline-block"}}/></button>
      <button className={styles.hambtn} onClick={switchhammenu}>
      <GiHamburgerMenu/>
  </button>
  <div className={styles.linksdiv} id='linksdiv'>
    <div className={styles.links}>
    <button><Link href={'#'}><AiFillInstagram/></Link></button>
    </div>
    <div className={styles.links}>
    <button><Link href={'#'}><AiFillYoutube/></Link></button>
    </div>
    <div className={styles.links}>
    <button><Link href={'#'}><AiOutlineTwitter/></Link></button>
    </div>
    <div className={styles.links}>
    <button><Link href={'#'}><AiFillFacebook/></Link></button>
    </div>
</div>


    </Flex>
    <div className={styles.hammenu} id='hammenu'>
      <ul>
      <li><button onClick={closeham}><Link className={styles.hamlink} href={'#home'}>Home</Link></button></li>
      <li><button onClick={closeham}><Link className={styles.hamlink} href={'#about'}>About</Link></button></li>
      <li><button onClick={closeham}><Link className={styles.hamlink} href={'#issues'}>Issues</Link></button></li>
      <li><button onClick={closeham}><Link className={styles.hamlink} href={'#media'}>Media</Link></button></li>
      <li>
        <div className={styles.socialsdiv}>
          <button><Link href={'#'}><AiFillInstagram/></Link></button>
          <button><Link href={'#'}><AiFillYoutube/></Link></button>
          <button><Link href={'#'}><AiOutlineTwitter/></Link></button>
          <button><Link href={'#'}><AiFillFacebook/></Link></button>
        </div>
      </li>
      </ul>
    </div>
  
  {/* Hero container */}
  <Flex
    height={"90vh"} 
    width={"100vw"}
    id='home'
  >
    <Flex
    height={"90vh"} 
    width={"100vw"}
    bgGradient='linear(to-r, white, whiteAlpha.600)'  
    position={'absolute'}
    zIndex={10}
    alignItems={"center"}
justifyContent={"center"}
textAlign={'center'}
display={'block'}
  >
    <br/><br/><br/><br/>
    <Image className={styles.rahulimg} src={'/rahulgandhiimg2.png'} width={1000} height={1000} alt='rahulgandhibgimg'/>

<Heading as='h1' size='lg' noOfLines={2} display={'inline-block'} marginTop={'20px'} fontWeight={"lighter"} padding={"10px"}>
 <h1 style={{"display":"inline-block","color":"white","background":"black","padding":"2px 5px","borderRadius":"5px"}}>Leadership</h1> is the capacity to translate vision into reality.
  </Heading>
    </Flex> 
    <Image className={styles.herobg} src={'/rahulgandhispeech.jpg'} width={1000} height={1000} alt='rahulgandhibgimg'/>
  </Flex>
  <br/><br/><br/><br/>
  {/* About container */}
  <h1 style={{"textAlign":"center","fontWeight":"bold","fontSize":"xx-large","textDecoration":"underline","font-family":"'Times New Roman', Times, serif"}}>About</h1>
  <br/><br/>
  <div
  className={styles.aboutcont} 
    width={"100vw"}
    id='about'
  >
    
    <div className={styles.piccont}>
    <Image className={styles.image} src={'/rgabout.jpg'} width={1000} height={1000} alt='rgabtimg'/>
    </div>
    <div className={styles.infocont}>
      <h1 style={{"margin":"auto","fontWeight":"bold","fontSize":"x-large"}}>Rahul Gandhi</h1>
      <div style={{"width":"100%","height":"100%","overflow":"auto","textAlign":"left"}}>
    <ReactReadMoreReadLess
                charLimit={400}
                readMoreText={"Read more"}
                readLessText={"Read less"}
            >
    Rahul Rajiv Gandhi ,born 19 June 1970, is an Indian politician and a former member of the Indian Parliament, who represented the constituencies of Amethi, Uttar Pradesh and Wayanad, Kerala in the Lok Sabha. He is a member of the main opposition party, the Indian National Congress and was the party president from December 2017 to July 2019. He is the chairperson of the Indian Youth Congress, the National Students Union of India and a trustee of the Rajiv Gandhi Foundation and Rajiv Gandhi Charitable Trust. On 23 March 2023, he was convicted and sentenced to two years imprisonment by a court in Gujarat for a 2019 speech made against the Prime Minister Narendra Modi on defamation allegations related to his surname;[8] the conviction resulted in his disqualification from the Parliament.
    Born in New Delhi, Gandhi spent his early childhood between Delhi and Dehradun and stayed away from the public sphere for much of his childhood and early youth. He attained primary education in New Delhi and Dehradun but was later homeschooled because of security concerns. He began his undergraduate career at St. Stephen's College before moving to Harvard University. Later he transferred to Rollins College in Florida, from which he graduated in 1994 due to security threats following the assassination of his father, the late Prime Minister Rajiv Gandhi. The next year, he obtained his M.Phil. from Cambridge. Post-graduation, he began his professional career with the Monitor Group, a management consulting firm in London. He soon returned to India and established the Mumbai-based technology outsourcing firm, Backops Services Private Ltd.
    </ReactReadMoreReadLess> 
    </div>
    </div>
  </div>
<br/><br/><br/><br/>
  {/* Issues container */}

    <div id='issues' style={{"width":"100vw","padding":"20px"}}>
    <h1 style={{"textAlign":"center","fontWeight":"bold","fontSize":"xx-large","textDecoration":"underline","font-family":"'Times New Roman', Times, serif"}}>Issues</h1>
    <br/><br/>
    <h1 style={{"textAlign":"center","fontSize":"large","fontWeight":"bold","scale":"1.5"}}>Bharat Jodo Yatra</h1>
        <div className={styles.eventcont}>
          <div className={styles.leftdiv}>
            <Image className={styles.image} src={'/rgbharatjodo.jpg'} width={1000} height={1000} alt='bharatjodo' />
          </div>
          <div className={styles.rightdiv}>
          <p>
          Rahul Gandhi launched the yatra on 7 September 2022 at Kanyakumari after paying tributes to his late father Rajiv Gandhi, Swami Vivekananda, and the Tamil poet Thiruvalluvar. The Congress said the yatra was "India's biggest mass contact program", during which the concerns of the people will reach Delhi. After unfurling the tricolour flag at the Srinagar's historic Lal Chowk, which marked the end of 137-day-long foot march from Kanyakumari to Kashmir, Congress leader Rahul Gandhi said that the Bharat Jodo Yatra has given an alternative vision of the politics to the country. Rahul Gandhi unfurled that national flag at the historic clock tower and sang the national anthem to send a strong message of nationalism.
          </p>
          </div>
        </div>

        <h1 style={{"textAlign":"center","fontSize":"large","fontWeight":"bold","scale":"1.5"}}>LGBTQ Rights</h1>
        <div className={styles.eventcont}>
          <div className={styles.leftdiv}>
            <Image className={styles.image} src={'/rglgbt.jpg'} width={1000} height={1000} alt='bharatjodo' />
          </div>
          <div className={styles.rightdiv}>
          <p>
          Gandhi has spoken publicly about the importance of women's empowerment and gender equality in India. For instance, he has called for increased representation of women in politics and for the eradication of gender-based violence. Under second Manmohan Singh ministry, Women's Reservation Bill which would allow 33 per cent reservation of all Lok Sabha and state legislative assembly seats for women, was introduced in the Rajya Sabha. Gandhi backed the Women's Reservation Bill stating, "Women do not need any protection. If you give them their rights, they can protect themselves". This bill was passed the Rajya Sabha on 9 March 2010, stating that the reservation would no longer be in effect after 15 years from its implementation. 
          </p>
          </div>
        </div>

        <h1 style={{"textAlign":"center","fontSize":"large","fontWeight":"bold","scale":"1.5"}}>General election (2019)</h1>
        <div className={styles.eventcont}>
          <div className={styles.leftdiv}>
            <Image className={styles.image} src={'/rg2019.png'} width={1000} height={1000} alt='bharatjodo' />
          </div>
          <div className={styles.rightdiv}>
          <p>
          Gandhi used the slogan "Chowkidar Chor Hai" as a jibe against Narendra Modi, BJP's Prime Ministerial candidate for the 2019 Indian general election. The slogan was aimed at Modi about the alleged irregularities and favoritism in awarding the contracts for the Rafale fighter jet deal. The said case was considered by the Supreme Court of India and after carefully going through all the evidence, the high court dismissed the case and exonerated the current government of India.
          </p>
          </div>
        </div>

    </div>

    {/* Media */}

    <div id='media' className={styles.mediacont}>
    <h1 style={{"textAlign":"center","fontWeight":"bold","fontSize":"xx-large","textDecoration":"underline","font-family":"'Times New Roman', Times, serif"}}>Media</h1>
      <div id='s1' className={styles.slide}>
        <div className={styles.piccard}>
          <Image src={'/pic1.jpg'} width={1000} height={1000} alt='pic' className={styles.img} />
        </div>
        <div className={styles.piccard}>
          <Image src={'/pic2.jpg'} width={1000} height={1000} alt='pic' className={styles.img} />
        </div>
        <div className={styles.piccard}>
          <Image src={'/pic3.jpg'} width={1000} height={1000} alt='pic' className={styles.img} />
        </div>
      </div>
      <div id='s2' className={styles.slide} style={{"display":"none"}}>
        <div className={styles.piccard}>
          <Image src={'/pic4.jpg'} width={1000} height={1000} alt='pic' className={styles.img} />
        </div>
        <div className={styles.piccard}>
          <Image src={'/pic5.jpg'} width={1000} height={1000} alt='pic' className={styles.img} />
        </div>
        <div className={styles.piccard}>
          <Image src={'/pic6.jpg'} width={1000} height={1000} alt='pic' className={styles.img} />
        </div>
      </div>

      <div className={styles.buttoncont}>
        <button id='b1' onClick={openDiv1} style={{"background":"black"}}></button>
        <button id='b2' onClick={openDiv2}></button>
      </div>
    </div>

    </div>
  )
}

export default index