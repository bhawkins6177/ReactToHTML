import { useState, useEffect } from "react"
function Form(){

const [name, setName] = useState('');
const [file, setFile] = useState(null);
    return(
        <div>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="file"
                    value={file}
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </form>
        </div>
    )
}
export default Form;