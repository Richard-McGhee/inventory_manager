import React from "react";
import styled from "styled-components";

const HomeStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    text-align: center;
    color: #d3c422;
  }
  h1:hover{
        color: #C8A659;
  }
  .homeBio{
    display: flex;
    justify-content: space-around;
  }
  p{
    width: 20%;
  }
`;

const Home = () => {
  return (
    <HomeStyles>
      <h1>Placeholder</h1>
      <h2>Placeholder2</h2>
      <div className="homeBio">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias non ad corporis? Ratione illum ex, blanditiis reiciendis accusamus soluta eos expedita, tempore iusto, vitae itaque necessitatibus laudantium nam voluptates quos fugiat? Repudiandae necessitatibus voluptas pariatur vitae ratione blanditiis, ab explicabo odio. Distinctio doloremque ipsam saepe nihil. Veniam numquam esse error neque iure accusantium alias ab quisquam. Eaque mollitia eius molestias molestiae incidunt culpa quasi ratione commodi rem neque vel at assumenda nam, expedita asperiores aliquam accusantium quam natus ab porro in.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias non ad corporis? Ratione illum ex, blanditiis reiciendis accusamus soluta eos expedita, tempore iusto, vitae itaque necessitatibus laudantium nam voluptates quos fugiat? Repudiandae necessitatibus voluptas pariatur vitae ratione blanditiis, ab explicabo odio. Distinctio doloremque ipsam saepe nihil. Veniam numquam esse error neque iure accusantium alias ab quisquam. Eaque mollitia eius molestias molestiae incidunt culpa quasi ratione commodi rem neque vel at assumenda nam, expedita asperiores aliquam accusantium quam natus ab porro in.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias non ad corporis? Ratione illum ex, blanditiis reiciendis accusamus soluta eos expedita, tempore iusto, vitae itaque necessitatibus laudantium nam voluptates quos fugiat? Repudiandae necessitatibus voluptas pariatur vitae ratione blanditiis, ab explicabo odio. Distinctio doloremque ipsam saepe nihil. Veniam numquam esse error neque iure accusantium alias ab quisquam. Eaque mollitia eius molestias molestiae incidunt culpa quasi ratione commodi rem neque vel at assumenda nam, expedita asperiores aliquam accusantium quam natus ab porro in.
        </p>
      </div>
    </HomeStyles>
  );
};

export default Home;
