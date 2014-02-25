<?php



$galleryPhp = array();
buildArrayOfGallery("../gallery", $galleryPhp);
echo json_encode($galleryPhp);






//functions
function buildArrayOfGallery($dir, &$arrayResultat){
	if($dossier = opendir($dir))
	{
			while(false !== ($fichier = readdir($dossier)))
			{
			
				if($fichier != '.' && $fichier != '..' && $fichier != 'index.php')
					{
						if(is_dir($dir.'/'.$fichier))
							{
								if (($fichier != ".") && ($fichier != ".."))
								{
									buildArrayOfGallery("$dir/$fichier", $arrayResultat);	
								}
							}       
						else if(isJpg($fichier))
							{
								$arrayResultat[] = array('collection' => utf8_encode(getDirectory($dir)),
													'src' => 'resources/gallery/'.utf8_encode(getDirectory($dir))."/".utf8_encode($fichier).''
												);
							}
					} 
			}  
	}
}

function buildName($fichier)
{
        return str_replace('_',' ',$fichier);
}

function getExtension($fichier)
{
		//get the sub string delimited by '.' in a array
        $extension = explode('.', $fichier);
        
		//reverse the arry to obtain the extension at the the first index
        $extension = array_reverse($extension);
        
        return  $extension[0];
}

function getDirectory($dir)
{
	//get the last directory of a path
	$arrayPath = explode('/', $dir);
	$arrayPath = array_reverse($arrayPath);
	return $arrayPath[0];
}

//check if the file is a jpg
function isJpg($fichier)
{
	return (strcasecmp(getExtension($fichier),'jpg')==0)?1:0;
} 
?>