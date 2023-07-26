import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../commons/ButonPrimary/ButtonPrimary"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./article.scss"
import Swal from "sweetalert2";

export default function Article(props) {    

    let navigate = useNavigate();    

    const deleteArticle = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure you want to delete this article?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                    method: 'DELETE',
                });                           

                let updatedArticles = props.articles.filter((article) => {
                    return article.id !== id;
                  })

                props.setArticles(updatedArticles)  

                Swal.fire(
                    'Deleted!',
                    'Article has been deleted.',
                    'success'
                )
            }
          })
    }

    return (
        <div className="article">
            <div className="article-head">
                <h2>{props.title}</h2>                                           
            </div>
            <div className="article-options">
                <a onClick={() => {deleteArticle(props.id)  }}><FontAwesomeIcon icon={faTrash} /></a>
            </div>
            <div className="article-body">
                <p>{props.body}</p>
                <ButtonPrimary text="See more" onClick={() => navigate("/about")} />
            </div>
        </div>
    )
}