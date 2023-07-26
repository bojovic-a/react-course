import React from 'react';
import Layout from '../../layout/Layout';
import Article from '../../article/Article';
import ArticleForm from '../../article_form/ArticleForm';
import { useState, useEffect } from 'react';
import "./home.scss"
import Swal from 'sweetalert2';

export default function Home() {
    
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const url = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                return Error("Can't fetch posts");
            }
            return res.json();
        })
        .then(data => setArticles(data));
    }, [])

    const createArticle = () => {  
        
        if (!title) {
            Swal.fire("Title can't be empty");
            return
        }

        if (!content) {
            Swal.fire("Content can't be empty");
            return
        } 
        
        let newArticle = {
            id: articles.length + 1,
            userId: 1,
            title: title,
            body: content
        }
        setArticles([newArticle, ...articles])

        Swal.fire("Article added successfully")

    }    
    
    return (        
        <Layout>
            <div className="container">                
                <div>  
                <ArticleForm setTitle={setTitle} setContent={setContent} createArticle={createArticle} />
                <h2>All articles</h2>
                    <div className='articles'>
                    {articles.reverse().map((article, index) => {
                        return (                            
                            <Article title={article.title} body={article.body} key={index} id={article.id} setArticles={setArticles} articles={articles} />                       
                        );
                    })}
                    </div>                    
                </div>
            </div>
        </Layout>
    );
}