export type ProfileProps = {
    name: string
}
const Profile = ({name}: ProfileProps) => {
    return (
        <div>Private Profile component. Name is {name}8</div>
    )
}

export default Profile