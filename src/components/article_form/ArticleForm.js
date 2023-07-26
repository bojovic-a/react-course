import React from "react";
import "./article_form.scss"

export default function ArticleForm({setTitle, setContent, createArticle}) {
    return (
        <div className="form">
            <div className="form-pair">
                <label>Title: </label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" />
            </div>
            <div className="form-pair">
                <label>Content: </label>
                <input onChange={(e) => setContent(e.target.value)} type="text" name="title" />
            </div>            
            <div className="form-pair">
                <input onClick={createArticle} type="submit" value="Add article" />
            </div>
        </div>
    )
}