import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as sha1 from '../../utils/sha'
import "./vulScanner.scss"

function VulScanner(props){
    const [selectedFile, setSelectedFile] = useState(null)
    const [checkSumVal, setCheckSumVal] = useState(null)

    const onFileChange = (e) => {
        let file = e.target.files[0];
        if (file) {
            calculateHash(file, (checkSumVal)  =>{
                console.log(checkSumVal, 'fileSha1')
                setCheckSumVal(checkSumVal);
            });
            setSelectedFile(file);
        }
    }

    const calculateHash = (file, callback) => {
        let reader = new FileReader();
        reader.onload = (event) => {
            let fileSha1 = sha1(reader.result);
            callback(fileSha1);
        };
        reader.readAsArrayBuffer(file);
    }

    const onCheckFileHandler = async () => {
        //to do
        // const response =  await axios.post("api/checkSumVal", {checkSumVal});
        //  console.log(response, 'response');

    }

    return (
        <div className={'vul-scanner-container'}>
            <h2> Welcome to Vul Scanner!!</h2>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onCheckFileHandler}>
                    Check File
                </button>
            </div>
            <br/>

            {/*<form>*/}
            {/*    <label>File Name : {setSelectedFile}</label>*/}
            {/*</form>*/}

            <div>
                <span >File Name : {selectedFile ? selectedFile.name : 'NA'}</span><br/>
                <span className="header">File Size : {selectedFile ? selectedFile.size : 'NA'}</span><br/>
                {/*<span className="header">File Last Modified Date : {selectedFile ? selectedFile.lastModifiedDate : 'NA'}</span><br/>*/}
                {/*<span className="header">File Type : {selectedFile ? selectedFile.type : 'NA'}</span><br/>*/}
            </div>






            <div>
                {/*<table className="table table-striped">*/}
                {/*    <thead> File Details*/}
                {/*    /!*<tr>*!/*/}
                {/*    /!*    <th scope="col">#</th>*!/*/}
                {/*    /!*    <th scope="col">First</th>*!/*/}
                {/*    /!*    <th scope="col">Last</th>*!/*/}
                {/*    /!*    <th scope="col">Handle</th>*!/*/}
                {/*    /!*</tr>*!/*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    <tr>*/}
                {/*        <th scope="row">1</th>*/}
                {/*        <td>File Name</td>*/}
                {/*        <td></td>*/}
                {/*        <td>@mdo</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th scope="row">2</th>*/}
                {/*        <td>Jacob</td>*/}
                {/*        <td>Thornton</td>*/}
                {/*        <td>@fat</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th scope="row">3</th>*/}
                {/*        <td>Larry</td>*/}
                {/*        <td>the Bird</td>*/}
                {/*        <td>@twitter</td>*/}
                {/*    </tr>*/}
                {/*    </tbody>*/}
                {/*</table>*/}
            </div>

        </div>

    )
}

export default VulScanner;