import {Component} from "react";
import FCRecipes from "../FunctionalComp/FCRecipes";
import FCRecipesDone from "../FunctionalComp/FCRecipesDone";

import {Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


var recipes=[
  {img:"https://ynet-images1.yit.co.il/picserver5/wcm_upload/2022/09/12/B1U8bVI3gj/1555796.jpg",
   name: "Lamb chops",
   description:"",
   btnTxt:"Prepare dish!" 
  },

  {img:"https://ynet-images1.yit.co.il/picserver5/crop_images/2022/09/12/HJG8bVL3es/HJG8bVL3es_0_859_2000_1811_0_x-large.jpg",
   name:"Flakes with a palmette skewer",
   description:"",
   btnTxt:"Prepare dish!" 
  },

  {img:"https://ynet-images1.yit.co.il/picserver5/crop_images/2022/09/12/SyNUb4I2eo/SyNUb4I2eo_0_0_3000_2000_0_x-large.jpg",
   name:"Lamb osobuku with risotto",
   description:"",
   btnTxt:"Prepare dish!" 
  
  },
  
];


var newRList=[];


export default class CCKitchen extends Component{
    constructor(props){
        super(props);

        this.state = {
          pRecList: recipes,
          newpRecList: newRList,
          counter: newRList.length
        };


    }


    addRec=(recSelected)=>{
 
      let newpTmpRList=[...this.state.newpRecList,{img: recSelected.img, name: recSelected.name ,description: recSelected.description ,btnTxt: recSelected.btnTxt }];
      this.setState((prev)=>({
        newpRecList: newpTmpRList,
        counter: prev.counter+1
      }));
  
      let pRecTmpList= this.state.pRecList.filter((rec) => rec.img !== recSelected.img);
      this.setState({pRecList: pRecTmpList});

    }


    addRecDone=(recSelected)=>{

      let pRecTmpList=[...this.state.pRecList,{img: recSelected.img, name: recSelected.name ,description: recSelected.description ,btnTxt: recSelected.btnTxt }];
      this.setState({pRecList: pRecTmpList});

      let newpTmpRList= this.state.newpRecList.filter((rec) => rec.img !== recSelected.img);
      this.setState((prev)=>({
        newpRecList: newpTmpRList,
        counter: prev.counter-1
      }));
    }

      

      
    render(){
        return(
            <div>
                <h1>Recipes</h1>
                <h3>Recipes made:</h3>

                <FCRecipes recipes={this.state.pRecList} addRec={this.addRec} />
                <FCRecipesDone recipes={this.state.newpRecList} addRecDone={this.addRecDone}  counter={this.state.counter} />
                

            </div>
        );
    }
 
}
  
