import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AskQuestionForm.css"

interface FormData{
    question  :string;
    questionDescription : string;
    keyword: string;
}

function AskQuestionForm(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        question : "",
        questionDescription : "",
        keyword : ""
    });

    const handleInputChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    };

    const handleCancel = () => {
        navigate("/");
    };

    const handleSubmit = (e: FormEvent ) => {
        e.preventDefault();

        console.log("Form Data :", formData);

        alert("Question Posted Successfully...!");

        setFormData({
            question : "",
            questionDescription : "",
            keyword : ""
        });
        navigate("/askQuestion");
    };
    
    return(
    <div className="askQformContainer">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="question">Question</label><br/>
                <input 
                    type="text" 
                    id="question" 
                    name="question" 
                    value={formData.question} 
                    onChange={handleInputChange} 
                    required /><br/>
            </div>
           
            <div>
                <label htmlFor="questionDescription">Question Description</label><br/>
                <textarea 
                    id="questionDescription" 
                    name="questionDescription" 
                    value={formData.questionDescription} 
                    onChange={handleInputChange} 
                    className="questionDescriptionInput" /><br/>
            </div>
            
            <div>
                <label htmlFor="keyword">Keywords</label><br/>
                <input 
                    type="text" 
                    id="keyword" 
                    name="keyword" 
                    value={formData.keyword} 
                    onChange={handleInputChange} /><br/>
            </div>
            
            <div className="buttons">
                <button type="submit" className="submit">Post your Question</button>
                <button type="button" className="cancel" onClick={handleCancel}>Close</button>
            </div>
          
        </form>

    </div>
   );
}

export default AskQuestionForm;
