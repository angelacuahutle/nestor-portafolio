import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';
import pdfFile from '../../static/Presentacion3.pdf';

export default function TheStripedShop({data: {images}}) {
  return <Layout header={'Back to Black'} next={"/boluminiscencia/"}>
    <Nod title={'Back to Black'}/>

    <a href={pdfFile} className="h5 general-text" download="Presentacion3.pdf">PDF BLACK TO BLACK</a>

    <div className="row  justify-content-center project-gallery">
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[3])} alt=""/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[5])} alt=""/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])} alt=""/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[1])} alt=""/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[6])} alt=""/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[10])} alt=""/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[7])} alt=""/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[2])} alt=""/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[8])} alt=""/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[13])} alt=""/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[4])} alt=""/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[12])} alt=""/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[14])} alt=""/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])} alt=""/>
      </div>
    </div>
  </Layout>;
}

export const query = graphql`{
    images: allFile(
        filter: {relativePath: {regex: "/bb_(.*)/i"}}
        sort: {order: ASC, fields: relativePath}
    ) {
        nodes {
            id
            relativePath
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 100
                )
            }
            publicURL
        }
    }
}
`;