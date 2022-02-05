import React from 'react'
import { dummyItems } from './API/DummyData'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'  Might link to each item

const InventoryStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h1{
        width: 100%;
        text-align: center;
        color: #D3C422;
    }
    h1:hover{
        color: #C8A659;
    }
    div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .itemEntry{
        width: 60%;
        display: flex;
        /* flex-direction: column; */
        /* border: 2px solid darkorchid; */
    }
    .itemEntry div{
        margin: 1% auto;
        border: 2px solid #93032E;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .eachItem{
        /* margin: 0 auto; */
    }
`

const Inventory = () => {
    return ( 
        <InventoryStyles>
            <h1>Inventory</h1>
            <div className="itemEntry">
                {dummyItems.length > 0 ? dummyItems.map((item, index) => (
                    // <Link to={`/${item.name}`}>
                        <div key={index} className="eachItem">
                            Name - {item.name}<br/>
                            Quantity - {item.quantity}<br/>
                            Price - {item.price}<br/>
                            Category - {item.category}<br/>
                            SKU - {item.SKU}<br/>
                            Sold - {item.sold}<br/>
                            On Hand - {item.onHand}<br/>
                            Description - {item.desc}<br/>
                            Tags - {item.tags}<br/>
                            On Floor - {item.onFloor}<br/>
                            Owner(s) - {item.owner.Companies} - {item.owner.User}
                        </div>
                    // </Link>
                )) : <div>EMPTY</div>}
            </div>
        </InventoryStyles>
    );
}
 
export default Inventory