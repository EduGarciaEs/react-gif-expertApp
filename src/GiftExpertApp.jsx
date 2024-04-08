
import { useState } from "react";
import {AddCategory,GifGrid,GifItem} from './components'


const GiftExpertApp = () => {

  //const newCategorie='Superman';
  
  const [categories,setCategories] = useState(['One Punch']);

  
  const onAddCategory=(newCategory)=>{

    if(categories.includes(newCategory)) return;


    //console.log(newCategory)
    //categories.push(newCategory);
    setCategories([newCategory,...categories]);

  }

  return (
    <>

         {/*titulo*/}
         <h1>GifExpertApp</h1>

         {/*Input*/}
         <AddCategory 
           //setCategories={setCategories} 
           onNewCategory={event=>onAddCategory(event)}
         />
         
       

         {/*Listado de Gif*/}

        
            {
            categories.map((category) =>(

              <GifGrid 
              key={category} 
              category={category} 
              />
          
                /*<div key={category}>
                  <h3>{category}</h3>
                  <li>{category}</li>
                </div>*/
            ))

            }
         
             {/*Gif Item*/}


    </>
  )
}

export default GiftExpertApp






