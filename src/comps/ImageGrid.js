import React from 'react'
import useFirestore from './useFirestore';
import { motion } from 'framer-motion';
function ImageGrid({setSelectedImg}) {
    const {docs} = useFirestore('images');
    console.log(docs);
    return (
        <div className="img-grid">
           {docs && docs.map(doc => (
            <motion.div className="img-wrap" key={doc.id}
               laout whileHover ={{ opacity : 1}}
               onClick={() => setSelectedImg(doc.url)}>
               <motion.img src={doc.url} alt="uploaded" 
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transitiion={{ delay: 1 }}/>
               </motion.div>
           ))}

        </div>
    )
}

export default ImageGrid
