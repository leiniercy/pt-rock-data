import styles from './LoadingSuspense.module.css'

//  backdropFilter="blur(10px)"

export const LoadingSuspense = () => {
  return (
    <>
      {true && (
        <div className='relative h-screen w-full bg-[#F5F9FC] z-[999] flex items-center justify-center'>
          <div className={styles.loader} />
        </div>
      )}
    </>
  )
}
