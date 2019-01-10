import React,{ Component } from 'react';
import { Button } from 'antd';
import IndexTop from './index_top';
import IndexNav from './index_nav';
import IndexSearch from './index_search';
import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from '../reactfineupload/gallery'
import '../reactfineupload/gallery/gallery.css'
import './index.less'

const initFiles = [
  {
    'id': 0,
    'name': 'IMG_20180803_181224.jpg',
    'size': 4266973,
    'uuid': '53e6d67e-ea73-41d2-8780-9798a474e45f',
    'thumbnailUrl': 'http://29e5534ea20a8.cdn.sohucs.com/c_zoom,h_213/c_cut,x_32,y_0,w_600,h_400/os/news/99f9b0799cac0675cd1df356629e0568.jpg',
  },
  {
    'id':3,
    'name': 'IMG_20180803_181348.jpg',
    'size': 2799364,
    'uuid': '3432d592-ceaf-45ff-b8a4-42802bed0723',
    'thumbnailUrl': 'http://29e5534ea20a8.cdn.sohucs.com/c_zoom,h_213/c_cut,x_32,y_0,w_600,h_400/os/news/99f9b0799cac0675cd1df356629e0568.jpg'
  },
]

//接口应该用如下的：
// const initFiles = [ 'http://29e5534ea20a8.cdn.sohucs.com/c_zoom,h_213/c_cut,x_32,y_0,w_600,h_400/os/news/99f9b0799cac0675cd1df356629e0568.jpg','http://29e5534ea20a8.cdn.sohucs.com/c_zoom,h_213/c_cut,x_32,y_0,w_600,h_400/os/news/99f9b0799cac0675cd1df356629e0568.jpg'];
const uploader = new FineUploaderTraditional({
  options: {
      chunking: {
          enabled: false
      },
      deleteFile: {
          enabled: true,
          endpoint: 'http://yt.i2u.top:4101/fineuploads'
      },
      request: {
          endpoint: 'http://yt.i2u.top:4101/fineuploads'
      },
      retry: {
          enableAuto: true
      }
  }
})

class Index extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <div style={{
        backgroundPositionX: 'center',
        backgroundPositionY:'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#000',
        backgroundAttachment: 'fixed',
        height:'100%'
  }}>
      <div className="search_box">
        <Gallery uploader={ uploader } files={initFiles} />
      </div>
      </div>
    );
  }
}

export default Index;
