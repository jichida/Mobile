import React from 'react'
import convert from './base64toblob';
import ImageA from './search_a.png';
import ImageB from './search_b.png';
import ImageC from './search_c.png';

const containerStyle = {
    display: 'inline-block',
    position: 'relative'
}

const inputStyle = {
    bottom: 0,
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%'
}

// const StyleableFileInput = ({ children, className, onChange, ...params }) => (
//     <div className={ `react-fine-uploader-file-input-container ${className || ''}` }
//          style={ containerStyle }
//     >
//         { children }
//         <input { ...params }
//                className='react-fine-uploader-file-input'
//                onChange={ onChange }
//                style={ inputStyle }
//                type='file'
//         />
//     </div>
// )

const xviewUploadImage = (param,callback)=>{
  callback({
    code:0,
    message:'success',
    data:[ImageA,ImageB,ImageC]
  })
};

const StyleableFileInput = ({ children, className, onChange, ...params }) => {

    const onClickSelPhoto = ()=>{
        xviewUploadImage({},(result)=>{
            let blobData = [];
            for( const item of result.data){
                blobData.push(convert(item))
            }

            onChange(blobData);
        });
    }

    return (
      <div className={ `react-fine-uploader-file-input-container ${className || ''}` }
           style={ containerStyle }
      >
          { children }
          <div
                className='react-fine-uploader-file-input'
                onClick ={ onClickSelPhoto }
                style={ inputStyle }
                type='file'
          />
      </div>
  );
}


/*
html input标签修改为原生
方法名：
    xviewUploadImage
参数：
    {
       "maxnumber": 图片的最大数量(不超过9)
       "color"    : 导航栏颜色(string)  例:"0xffffff"
       "callback" :回调方法名
    }
回调参数：
    {
        "code"   :"0/-1"
        "message":"success/failure"
        "data"   : 图片数组 (base64的string) / 空数组
    }

*/
export default StyleableFileInput
