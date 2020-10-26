import React from 'react'

function ProfileContainer() {
    return (
      <div>
        <input {...this.props} />
        <input {...this.props} />
      </div>
      
  )
}
const ProfiProfileHeaderleUp = () => {
    return (
        <div>
          <input {...this.props} />
          <input {...this.props} />
        </div>
    )
}
const ProfilePic = () => {
    return (
        <div>
            
        </div>
    )
}
const EditProfileButton = () => {
    return (
        <button onClick={this.props.updateInfo}>Edit</button>
      );
}

export default {
    ProfileContainer,
    ProfiProfileHeaderleUp,
    EditProfileButton,
}
