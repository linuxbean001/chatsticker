import React, { Component } from 'react';
import AllService from '../service/service'
const chatStickerAPI = new AllService();

class chatsticker extends Component {
    constructor(props){
        super(props);
        this.state ={ 
          ChatStickerData:''
         } 
         this.getChatsticker = this.getChatsticker.bind(this);
    }


    async componentDidMount(){
      await this.getChatsticker();
      }
      
 

      async getChatsticker() { 
        await chatStickerAPI.getChatstickerInfo()
              .then(res => {
                this.setState({
                     ChatStickerData:res.data,
                  })
              }).catch(err => {
                  console.log('xxxxxxx xxxx ', err);
              });
   
      }

  render() {
    return (
         <div className="Stock-section">
             <h2 style={{'textAlign':'center'}}>Search All Dog Stickers</h2>
              <div className="container">
              <div dangerouslySetInnerHTML={{ __html:this.state.ChatStickerData }}></div>
              </div>
 </div>
    );
  }
}

export default chatsticker;