
import {Navigate,useParams} from "react-router-dom";

import { useState } from "react";
export default function EditPost() {
    const {id}= useParams();
    const [redirect,setRedirect]=useState(false);
    
        fetch(`http://localhost:4000/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any authorization headers if required
          },
        })
          .then((response) => {
            if(response.ok){
                setRedirect(true);
             }else {
              // Handle error when deletion fails
              console.error('Error deleting post:', response.status);
            }
          })
          .catch((error) => {
            console.error('Error deleting post:', error);
          });

          if(redirect){
            return <Navigate to={'/'} />
           }
    
}