import React from 'react'
import { ShareButtons, generateShareIcon } from 'react-share'

let { FacebookShareButton, TwitterShareButton } = ShareButtons
let FacebookIcon = generateShareIcon('facebook')
let TwitterIcon = generateShareIcon('twitter')

const TweetThis = props => (
  <TwitterShareButton
    url={`http://effulgence.io{props.path}`}
    title={props.title}
    via={'_prayash'}
    className={'share-icons'}
  >
    <TwitterIcon round size={32} />
  </TwitterShareButton>
)

const FacebookShare = props => (
  <FacebookShareButton
    url={`http://effulgence.io${props.path}`}
    quote={props.title}
    className={'share-icons'}
  >
    <FacebookIcon round size={32} />
  </FacebookShareButton>
)

export { TweetThis, FacebookShare }
