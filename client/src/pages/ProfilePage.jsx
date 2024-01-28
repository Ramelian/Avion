import ProfileInformation from "../components/ProfileInformation"
import ProfileNavigation from "../components/ProfileNavigation"
import styles from "../style"

function ProfilePage() {
    
  return (
    <div className={`${styles.boxWidth}`}>
        <ProfileNavigation />
        {/* <ProfileInformation/> */}
    </div>
  )
}
export default ProfilePage