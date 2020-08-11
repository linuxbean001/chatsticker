import axios from 'axios';
export default class AllService {
   
    constructor() {
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    }    

async getChatstickerInfo(){ 
        console.log('ChatadminService...xx..x');
        return await axios.get(this.proxyurl+"https://chatsticker.com/?apiKey=CbAT3TnhoE0FXAqv61hcSxNQrqlZHK0KKEAP9Vl1Yn329l6fVIftXVWKO0rIKuXPN8MdraQLb6aN4kFrMyR7CjE67PGPfZPz4830VgmxMRZbI5YxMRH8ZtW2Z9AbjhdI&term=dog", { 
            "method": "GET",
            "headers": { 
                'Content-Type': 'application/json',
               }
        }).then((result) => {
                return (result);
            }).catch(err => {
                console.log('Chatxxxxxxx xxxxxxxxxxx err is ', err);
            });
    }
}    



