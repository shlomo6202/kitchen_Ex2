import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FCRecipe({recipe,addRec}) {


    const btnTell_SrcImg=()=>{
        
        if(recipe.btnTxt === "Prepare dish!"){
            recipe.btnTxt ="eat!";
            
        }
        else{ 
            recipe.btnTxt = "Prepare dish!";
            
        };
        

        addRec(recipe);

    }


    return (
    <Card style={{ width: '18rem', float: 'left' }}>
        <Card.Img variant="top" src={recipe.img} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
      
          <Button variant="primary" id={recipe.img} onClick={btnTell_SrcImg}>{recipe.btnTxt}</Button>
        </Card.Body>
      </Card>
    );
  }
  
 

