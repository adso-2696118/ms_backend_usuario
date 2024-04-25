export const messageBrowse = {
    home:"hola Home",
    galery:"Hola bienvida galery",
    about:"Q + about",
    contact:"Regalame tu contact",
    principal:"Por defecto"
};

export const success = (req, res, status=200, mensaje="")=>{
    res.status(status).json({
		error:false,
		status:status,
		body:mensaje
	}) 
};

export const error = (req, res, status=500, mensaje="")=>{

    res.status(status).json({
		error:true,
		status:status,
		body:mensaje
	})

};

