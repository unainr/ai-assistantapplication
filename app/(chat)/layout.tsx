import ChatHeader from '@/components/ChatHeader'
import Link from 'next/link'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
     <ChatHeader/>
    {children}
    </>
  )
}

export default layout