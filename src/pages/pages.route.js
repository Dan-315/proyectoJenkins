const { Router } = require('express');
const router = Router();



router.get('*',(req,res)=>{
    //const direccion=__dirname+"";
    return res.status(404).send('PAGE NOT FOUND')
    //return res.status(200).sendFile(direccion.substring(0, direccion.length - 6)+'/public/404.html')
  })

module.exports = router;