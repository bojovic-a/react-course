import React from "react";
import Layout from "../../layout/Layout";
import Image1 from "../../../img/lorem-ipsum.jpg"
import Image2 from "../../../img/lorem-ipsum-2.png"

export default function AboutUs() {
    return (
        <Layout>
            <div className="container">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum elit id dolor mollis ornare. Suspendisse id metus ut elit fringilla sodales nec in velit. Morbi non eros erat. Cras imperdiet ultricies egestas. Aliquam vitae rutrum risus. Vestibulum id nisl fermentum, luctus est in, condimentum dolor. Vivamus sollicitudin congue convallis. Vestibulum vel condimentum elit, a dapibus ante. Quisque aliquam risus et risus congue tempus. In consectetur consequat semper. Mauris suscipit rhoncus turpis, ut gravida nibh ultrices congue. Aliquam bibendum felis id purus suscipit, ut mollis tellus laoreet. Nam faucibus ex sit amet quam venenatis, quis consequat nisl tincidunt. Fusce facilisis. </p>            
                <img src={Image1}></img>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum ex non semper commodo. Nulla blandit vehicula tellus, faucibus vehicula lacus rutrum et. Aenean eget turpis vitae odio hendrerit maximus. Suspendisse potenti. Quisque tincidunt metus massa, sit amet feugiat erat vehicula a. Curabitur egestas, risus ut gravida suscipit, turpis metus condimentum odio, et auctor nunc lectus faucibus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur felis elit, pulvinar ut placerat eget, sagittis eget nunc. Nunc eget fringilla justo. Duis odio libero, fermentum ac velit in, accumsan blandit nulla.

                    Sed in dictum est. Donec dignissim semper leo vitae tincidunt. Integer magna sem, placerat iaculis commodo in, rutrum ut lectus. Donec pharetra, felis at ultrices rutrum, neque augue condimentum nisi, vitae tincidunt turpis urna non diam. Integer id ante sed arcu aliquam commodo. Morbi sagittis odio sed neque maximus vestibulum. Cras eros erat, euismod vitae neque. 
                </p>
                <img src={Image2}></img>
            </div>
        </Layout>
    )
}