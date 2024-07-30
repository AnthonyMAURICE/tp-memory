import { json2csv } from 'json-2-csv';

export default class DownloadData{
    /**
     * @param {string} _filename 
     * @param {string} _file 
     */
    constructor(_filename, _file){
        this.filename = _filename
        this.file = _file
        this.options = {
            delimiter : {
                wrap  : '\'', // Single Quote (') character
                field : ';', // Tab field delimiter
                eol   : '\n' // Newline delimiter
            },
        };
    }

    download() {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(json2csv(this.file, this.options)));
        element.setAttribute('download', this.filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }

}