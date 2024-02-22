import Image from 'next/image';
import React from 'react';
import styles from '@/components/footer/footer.module.css'

const Footer = () => {
    return <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className={styles.social}>
            <Image src="/1 .png" alt="lama" width={15} height={15} className={styles.icon}/>
            <Image src="/2.png" alt="lama" width={15} height={15} className={styles.icon}/>
            <Image src="/3.png" alt="lama" width={15} height={15} className={styles.icon}/>
            <Image src="/4.png" alt="lama" width={15} height={15} className={styles.icon}/>
        </div>
    </div>;
}



export default Footer;