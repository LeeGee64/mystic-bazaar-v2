import loadStyles from './loading.module.css';
import Image from 'next/image';
// import { motion } from 'framer-motion'; 

export default function Loading (props){
    return (
        <div className={props.loading ? loadStyles.bodyLoading : loadStyles.none}>
            <h1 className={loadStyles.loadingTitle}>SUMMONING</h1>
            {/* <motion.div 
            animate= {{rotate: 360}}
            transition= {{duration: 1, repeat: Infinity, repeatDelay: 1 }}
            className={loadStyles.loadingImage}><Image
                src= '/Images/loading_images/sacredGeo.png' 
                height={100}
                width={100}
                priority
            /></motion.div>       */}
        </div>
    );
}