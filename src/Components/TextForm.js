import React,{useState} from 'react'


export default function TextForm(props) {

      const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase","Success");
      }
   
      const handleLowercase = () => {
       let newText1 = text.toLowerCase();
       setText(newText1);
       props.showAlert("Converted To Lowercase","Success");
      }


      const handleReverseText = () => {
        let newText1 = text.split("").reverse().join("");
        setText(newText1);
        props.showAlert("Text is reversed","Success");
      }


      const handledownloadText = () =>
      {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("File Downloaded","Success");
      }

      const handleClearText = () => {
        let newText1 = "";
        setText(newText1);
        props.showAlert("Clear Text","Success");
      }

      const handleChange= (event) => {
            setText(event.target.value)
      }




  
   
    const [text, setText] = useState('');
  //  setText('Enter Text'); - right way to change the value


  return (
    <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="py-3">
               <h1>{props.heading} </h1>
                <textarea className="form-control" id="exampleFormControlTextarea1"  rows="8" value={text}  onChange={handleChange} ></textarea>
                <button type="submit" className="btn btn-primary mt-3 " onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mt-3 mx-3" onClick={handleLowercase}>Convert to Lowercase</button>
                <button type="submit" className="btn btn-primary mt-3 ml-3" onClick={handleReverseText}>Reverse</button>
                <button type="submit" className="btn btn-primary mt-3 mx-3" onClick={handleClearText}>Clear</button>
                <button type="submit" className="btn btn-primary mt-3 ml-3" onClick={handledownloadText}>Download</button>

             </div>
             <div className="summery">
                 <h4>Your text summery</h4>
                 <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
                 <p>You can read it in <strong>{text.split(" ").length * 0.008}</strong> Minutes</p>

                 <h5>Preview</h5>
                 <p>{text.length>0?text:'Enter text in above textbox for preview'}</p>
             </div>

        </div>
    </div>
  )
}
