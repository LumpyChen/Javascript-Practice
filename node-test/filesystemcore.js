/**
 * Created by Lumpychen on 16/2/5.
 */
var fs = require('fs');
fs.readdir('../node-test',function(err,flist){
    //console.log(flist);
    flist.map(function(file){
        fs.stat(file,function(err,info){
            //if(!err){
            //console.log(arguments);}
            switch (info.mode){
                case 16877:
                    console.log('Folder: '+file);
                    break;
                case  33188:
                    console.log('File: '+file);
            }
        })
    })
})
