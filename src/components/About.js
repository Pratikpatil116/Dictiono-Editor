import React from 'react'
import Footer from "./Footer/Footer";


function About(props) {
    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.headingg}</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <strong>Text Editor</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}>
                        <strong>This is the Text Editor.</strong><br/> This Project is combination of Text Editor nad World Wide Dictionary With Audio feature and the Next important feature of our project is DarkMode Enable and disable Feature.Text Editor is an Editor which can be used to manipulate your text in the way you want
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Dictionary</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} >
                        <strong>This is the World Wide Text Dictionary.</strong><br/> The dictionary is the most widely used reference source in all types of libraries. It is one of the most common reference sources referred by the students, teachers, and researchers. The dictionary provides information about words. It is most commonly used for defining the word of language to understand the difficult words, meaning, pronunciation, etc. Development in universe of knowledge, development of new words, complexity of reading materials, development of new subjects, terms and increasing literacy level are some of the reasons for the frequent use of dictionaries.
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />

        </div>
    )
}

export default About