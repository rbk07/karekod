import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import '../css/about.scss'

const About = ({ data }) => {
  let { imageSharp } = data

  return (
    <section className="content">
      <Helmet title="About / Prayash Thapa" />
      <div id="about" className="fade">
        <article className="overview">
          <header>

            
            <h2 className="bold">Hikayemiz</h2>
          </header>
             <Img alt="Prayash Thapa" sizes={imageSharp.sizes} />
          <br />

          <p>
          Günümüzde gelişmekte olan teknoloji ile birlikte gençlerimiz ve çocuklarımızın algoritma yeteneklerinin, tasarım zekalarının gelişmesi, kodlama kabiliyetlerinin artması beklenmektedir.
          </p>

          <br />

          <p>
          Toplumun en küçük yapı taşı olan aile gibi bir arada beraber hareket etmeyi, sevinmeyi, üzülmeyi çocukluk yaşımızdan itibaren öğrenmekteyiz.<br></br>
İşte <b>KareKod Robotik</b>’in hikayesi tam burada başlıyor,<br></br><br></br>

Kare geometri de kullanılan dört köşesi belli olan kenarları eşit bir bütünsel yapıdır. Biz bu yapıyı grup olarak tanımlamaktayız. Grup eğitimlerimiz, planlamalarımız, ortak çalışmalarımızın temsiliyetini kare oluşturmaktadır.
<br></br><br></br>
21. Yüzyılın temel taşlarından biri olan bilgisayarın icat edilmesinde öncü olan Kodlama: bir olayın somut verilerle ve sıralama ile yerine getirilmesine imkan veren bilimsel bir tekniktir. Hayatın mantık ve düzeninin temsiliyetini kodlama yapmaktadır. 
<br></br><br></br>
Robotik, mantık ve düzenin bir araya getirilerek fiziksel alete hareket yeteneği kazandırarak sensörlerle anlamlı işler yapabilmesine imkan tanımaktadır. Hayatın fiziksel hal alma  temsiliyetini robotik yapmaktadır. 
<br></br><br></br>
<b>Karekod Robotik:</b> Grup çalışması ile öğrenmenin mantık ve düzen çerçevesinde yapılarak, tasarımların fiziksel bir hal alabilmesinin geniş temsiliyetidir.
          </p>

      
      
        </article>
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About
