import React from 'react'

interface Props {
    params: { 
      id: number,
      photoId: number
    }
}

const UserPhotoPage = ({params: { id, photoId }}: Props) => {
  return (
    <p>Users {id} Photo Page {photoId}</p>
  )
}

export default UserPhotoPage
