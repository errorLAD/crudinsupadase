import {Card, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import { supabase } from './supabaseClient';

function ProductCard(props) {
    const product = props.product;

    const [ editing, setEditing ] = useState(false);
    const [ name, setName ] = useState(product.name);
    const [ description, setDescription ] = useState(product.description);

    async function updateProduct() {
        try {
            const { data, error } = await supabase
                .from("products")
                .update({
                    name: name,
                    description: description
                })
                .eq("id", product.id)
            
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteProduct() {
        try {
            const { data, error } = await supabase
                .from("products")
                .delete()
                .eq("id", product.id)
            
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div style={{width: "23rem"}}>
            <Card.Body>
                { editing == false ?
                    <>

<div
  className="relative block overflow-hidden rounded-lg bg-white border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
      {product.name}
      </h3>  </div>

    <div className="hidden sm:block sm:shrink-0">
      
    </div>
  </div>

  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
    {product.description}
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
    <button type= " button"className="btn btn-warning" onClick={() => deleteProduct()}>Delete Product</button>
                    
    </div>

    <div className="flex flex-col-reverse">
    <Button variant="secondary" onClick={() => setEditing(true)}>Edit Product</Button>
                   </div>
  </dl>
</div>
                </>
                :
                    <>
                        <h4 class="py-2"><b>Editing Product,</b></h4>
                        <Button size="sm" onClick={() => setEditing(false)}>Go Back</Button>
                        <br></br>
                        <Form.Label><small>Product Name</small></Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            defaultValue={product.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Label><small>Product Description</small></Form.Label>
                        <Form.Control
                            type="text"
                            id="description"
                            defaultValue={product.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br></br>
                        <button  type="button" class="btn btn-danger" onClick={() => updateProduct()}>Update Product in Supabase DB</button>
                    </>
                }
            </Card.Body>
        </div>
    )
}

export default ProductCard;