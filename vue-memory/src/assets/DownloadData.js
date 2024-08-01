import { json2csv } from 'json-2-csv';

export default class DownloadData{
    /**
     * @param {string} _filename nom du fichier qui sera créé
     * @param {string} _file corps du fichier, un json pour ce cas précis
     */
    constructor(_filename, _file){
        this.filename = _filename
        this.file = _file
        this.options = {
            delimiter : {
                wrap  : '\'', 
                field : ';', 
                eol   : '\n' 
            },
        };
    }

    // fonction qui gère le téléchargement du fichier final en .csv
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