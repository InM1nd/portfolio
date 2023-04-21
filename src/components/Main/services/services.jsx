import styles from "./services.module.scss"; 

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.services_wrapper}>
            {/* <h1 className={styles.services_title}>
            services
            </h1> */}
            <div className={styles.services_subtitle}>
                brand strategy 
            </div>
		    </div>
        </section>
    )
}

export default Services 