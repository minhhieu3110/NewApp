import {Block} from 'components';
import React from 'react';
import {Platform} from 'react-native';
import WebView from 'react-native-webview';

const WEBView = ({data, style, scrollEnabled = true, title, image}) => {
  return (
    <Block flex style={style}>
      <WebView
        androidLayerType="hardware"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        startInLoadingState={true}
        scalesPageToFit={false}
        useWebKit={true}
        originWhitelist={['*']}
        source={{
          baseUrl: '',
          html: `
          <html>
          <head>
            <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'>
            ${styles}
          </head>
          <body> 
          <div style="margin-left: 1.5%"> <img src='${
            image ? image : ''
          }'/></div/>
         <h1>${title ? title : ''} </h1> 
          ${data}
          </body>
          </html>`,
        }}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </Block>
  );
};

export default WEBView;

const fontFamily = Platform.select({
  ios: '-apple-system',
  android: 'Myriad Pro',
});

const styles = `<style type="text/css">
  * {
    font-size: 15px ;
    text-align: justify;
    line-height: 1.5;
    font-family: ${fontFamily} 
  }
  body {
    margin: 0;
    padding-bottom: 15;
  }
  img {
    max-width: 97%;
    height: auto;
    margin: 10px 5px 10px 5px;
  }
  p, figure {
    padding: 0;
    margin: 0;
  }
</style>`;
