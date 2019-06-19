import React, { Component } from 'react'
import Link from 'gatsby-link'
import { imageFills } from '../utils/preloader'
import '../css/emblem.scss'

export default class Emblem extends Component {
  render() {
    let emblem = (
      <svg
        id="main"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="500px"
        height="500px"
        viewBox="0 0 500 500"
        enableBackground="new 0 0 500 500"
      >
        <defs>
          <filter x="0" y="0" width="1" height="1" id="aboutTextBg">
            <feFlood floodColor="#DA5B79" />
            <feComposite in="SourceGraphic" />
          </filter>

          <filter x="0" y="0" width="1" height="1" id="workTextBg">
            <feFlood floodColor="#DB244B" />
            <feComposite in="SourceGraphic" />
          </filter>

          <filter x="0" y="0" width="1" height="1" id="blogTextBg">
            <feFlood floodColor="#9B9B9B" />
            <feComposite in="SourceGraphic" />
          </filter>

          <filter x="0" y="0" width="1" height="1" id="musicTextBg">
            <feFlood floodColor="#838183" />
            <feComposite in="SourceGraphic" />
          </filter>

          <pattern
            preserveAspectRatio="xMidYMid"
            x="0"
            y="0"
            id="aboutFill"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <image xlinkHref={imageFills.about} width="100%" height="55%" />
          </pattern>

          <pattern
            preserveAspectRatio="xMidYMid"
            x="50%"
            y="100"
            id="musicFill"
            width="100%"
            height="50%"
            patternUnits="userSpaceOnUse"
          >
            <image xlinkHref={imageFills.music} width="40%" height="78%" />
          </pattern>

          <pattern
            preserveAspectRatio="xMidYMid"
            x="0"
            y="-10%"
            id="workFill"
            width="100%"
            height="50%"
            patternUnits="userSpaceOnUse"
          >
            <image xlinkHref={imageFills.work} width="75%" height="60%" />
          </pattern>

          <pattern
            preserveAspectRatio="xMidYMid"
            x="-3%"
            y="5%"
            id="blogFill"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <image xlinkHref={imageFills.blog} width="70%" height="60%" />
          </pattern>
        </defs>

        <a
          xlinkHref="http://youtube.com/karekodrobotik"
          target="_blank"
          rel="noopener"
        >
          <path
            id="youtube"
            className="cover"
            d="M293.02,446.521c0-5.717-0.07-11.434,0.028-17.146c0.05-2.834-0.866-4.287-3.96-4.265
            c-11.701,0.086-23.406,0.062-35.109,0.021c-2.541-0.009-3.737,1.021-3.729,3.632c0.042,11.839,0.042,23.68,0,35.519
            c-0.009,2.61,1.189,3.639,3.73,3.631c11.703-0.041,23.406-0.064,35.109,0.021c3.094,0.022,4.008-1.434,3.958-4.266
            C292.948,457.952,293.02,452.235,293.02,446.521z"
          />
          <path
            id="youtube-icon"
            fill="#FFFFFF"
            d="M285.401,453.441c-2.136-0.146-6.893-0.145-9.025,0
      			c-2.31,0.158-2.581,1.554-2.599,5.226c0.018,3.665,0.287,5.065,2.599,5.225c2.133,0.145,6.89,0.146,9.025,0
      			c2.31-0.158,2.581-1.554,2.599-5.225C287.982,455.001,287.713,453.601,285.401,453.441z M279.11,461.037v-4.741l4.741,2.366
      			L279.11,461.037z"
          />
        </a>

        <a
          xlinkHref="http://instagram.com/karekodrobotik"
          target="_blank"
          rel="noopener"
        >
          <path
            id="insta"
            className="cover"
            d="M338.667,400.948c0,5.579-0.088,11.159,0.035,16.733c0.067,3.071-1.02,4.46-4.248,4.433
            c-11.429-0.103-22.859-0.086-34.289-0.011c-2.967,0.021-4.133-1.193-4.112-4.139c0.074-11.43,0.092-22.859-0.011-34.289
            c-0.028-3.253,1.411-4.248,4.456-4.224c11.292,0.09,22.587,0.097,33.879-0.001c3.161-0.028,4.398,1.213,4.327,4.354
            C338.576,389.518,338.668,395.232,338.667,400.948z"
          />
          <path
            id="insta-icon"
            fill="#FFFFFF"
            d="M323.946,418.582c5.428,0,8.396-4.499,8.396-8.398c0-0.127,0-0.255-0.008-0.381
      			c0.577-0.418,1.076-0.937,1.472-1.526c-0.539,0.237-1.111,0.394-1.694,0.464c0.615-0.37,1.076-0.95,1.297-1.635
      			c-0.58,0.346-1.213,0.587-1.874,0.717c-1.117-1.188-2.986-1.245-4.177-0.128c-0.766,0.722-1.091,1.797-0.854,2.822
      			c-2.374-0.12-4.583-1.241-6.082-3.086c-0.784,1.349-0.384,3.074,0.914,3.94c-0.471-0.014-0.931-0.14-1.341-0.369
      			c0,0.012,0,0.023,0,0.036c0,1.405,0.991,2.614,2.368,2.894c-0.434,0.118-0.89,0.136-1.333,0.053
      			c0.388,1.201,1.495,2.024,2.758,2.05c-1.045,0.82-2.336,1.266-3.664,1.265c-0.236,0-0.471-0.016-0.703-0.042
      			c1.35,0.866,2.919,1.325,4.524,1.322"
          />
        </a>

        

        <a
          xlinkHref="http://facebook.com/karekodrobotik"
          target="_blank"
          rel="noopener"
        >
          <path
            id="facebook"
            className="cover"
            d="M362.829,376.408c-5.573,0.001-11.149-0.092-16.72,0.037c-3.081,0.07-4.432-1.03-4.4-4.252
            c0.105-11.416,0.104-22.836,0-34.254c-0.028-3.176,1.233-4.324,4.355-4.297c11.417,0.101,22.835,0.086,34.253,0.01
            c2.896-0.021,4.207,1.021,4.187,4.039c-0.079,11.554-0.078,23.107,0.002,34.66c0.02,2.979-1.209,4.14-4.144,4.084
            C374.52,376.331,368.673,376.404,362.829,376.408z"
          />
          <path
            id="facebook-icon"
            fill="#FFFFFF"
            d="M378.892,366.218h-1.021c-0.326,0-0.571,0.135-0.571,0.473v0.589h1.592l-0.127,1.592
      			h-1.466v4.248h-1.592v-4.248h-1.062v-1.592h1.062v-1.02c0-1.074,0.565-1.634,1.838-1.634h1.347V366.218z"
          />
        </a>

     

        

        <Link id="aboutLink" to="/about/" activeClassName="current">
          <path
            id="about"
            fill="url(#aboutFill)"
            className="cover"
            d="M378.533,5.24c0.673-0.855,2.3-1.417,3.42-1.317c0.866,0.077,1.855,1.269,2.354,2.2
            c0.406,0.757,0.208,1.861,0.208,2.812c-0.001,78.257-0.03,156.516,0.044,234.772c0.006,3.821-1.077,5.278-5.072,5.266
            c-41.373-0.119-82.746-0.125-124.12-0.046c-3.654,0.006-5.051-1.101-5.045-4.895c0.088-48.724,0.251-97.448-0.116-146.169
            c-0.072-9.501,0.735-17.564,9.597-23.125L378.533,5.24z"
          />
          <text
            className="underlay-text"
            transform="matrix(1 0 0 1 265 240)"
            filter="url(#aboutTextBg)"
            x="0"
            y="0"
          >
            &nbsp;Hikayemiz&nbsp;
          </text>
        </Link>

        <Link id="workLink" to="/work/" activeClassName="current">
          <path
            id="work"
            fill="url(#workFill)"
            className="cover"
            d="M247.323,489.883c0,1.463-0.141,2.927-0.291,5.826c-4.047-3.169-7.095-5.556-10.14-7.943
            c-19.886-15.598-39.799-31.164-59.65-46.806c-13.658-10.763-27.21-21.662-40.863-32.431c-2.539-2.002-3.736-4.244-3.731-7.61
            c0.099-59.317,0.082-118.635,0.107-177.951c0.003-5.397,0.143-5.512,5.474-5.514c34.546-0.013,69.093-0.017,103.64-0.015
            c5.231,0.001,5.517,0.513,5.383,5.546L247.323,489.883z"
          />
          <text
            className="underlay-text"
            transform="matrix(1 0 0 1 140 240)"
            filter="url(#workTextBg)"
            x="0"
            y="0"
          >
            &nbsp;Çalışmalarımız&nbsp;
          </text>
        </Link>

        <Link id="blogLink" to="/blog/" activeClassName="current">
          <path
            id="video"
            fill="url(#blogFill)"
            className="cover"
            d="M155.681,213.902c-28.708,0-57.415,0.001-86.123,0c-5.327,0-5.502-0.148-5.505-5.49
            c-0.013-30.75-0.016-61.499-0.01-92.249c0.001-5.316,0.157-5.48,5.529-5.482c57.417-0.019,114.834-0.028,172.252-0.028
            c5.344,0,5.492,0.15,5.493,5.512c0.009,30.75,0.005,61.499-0.009,92.247c-0.003,5.351-0.159,5.507-5.502,5.51
            c-28.709,0.013-57.417,0.005-86.125,0.005C155.681,213.92,155.681,213.912,155.681,213.902z"
          />
          <text
            className="underlay-text"
            transform="matrix(1 0 0 1 75 135)"
            x="0"
            y="0"
            filter="url(#blogTextBg)"
          >
            &nbsp;blog&nbsp;
          </text>
        </Link>

        <Link id="musicLink" to="/music/" activeClassName="current">
          <path
            id="musica"
            fill="url(#musicFill)"
            className="cover"
            d="M256.307,330.646c-5.912,0-5.966-0.07-5.974-5.869c-0.007-6.123-0.038-12.245,0.006-18.367l-0.023-17.579
            c0.013-10.339,0.161-20.681,0.017-31.019c-0.052-3.715,1.272-4.987,4.991-4.982c56.325,0.068,112.65,0.033,168.978,0.021
            c2.585,0,5.171,0.058,7.754-0.037c2.801-0.104,3.925,1.199,3.871,3.933l0.047,69.373c0.041,3.362-1.241,4.612-4.566,4.522
            L256.307,330.646z"
          />
          <text
            className="underlay-text"
            transform="matrix(1 0 0 1 265 320)"
            filter="url(#musicTextBg)"
            x="0"
            y="0"
          >
            &nbsp;music&nbsp;
          </text>
        </Link>
      </svg>
    )

    return (
      <div id="emblem-wrapper" className="swoosh">
        {emblem}
      </div>
    )
  }
}
