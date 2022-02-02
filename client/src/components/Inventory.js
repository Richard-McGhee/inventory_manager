import React from 'react'
import { dummyItems } from './API/DummyData'
import styled from 'styled-components'

const InventoryStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h1{
        width: 100%;
        text-align: center;
    }
    div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .itemEntry{
        width: 60%;
        border: 2px solid darkorchid;
    }
`

const Inventory = () => {
    return ( 
        <InventoryStyles>
            <h1>Placeholder</h1>
            <div className="itemEntry">
                {dummyItems.length > 0 ? dummyItems.map((item, index) => (
                    <div key={index}>
                        Name - {item.name}
                        Quantity - {item.quantity}
                        Price - {item.price}
                    </div>
                )) : <div>EMPTY</div>}
            </div>
        </InventoryStyles>
    );
}
 
export default Inventory