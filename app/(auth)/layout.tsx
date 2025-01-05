import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="container relative min-h-screen flex flex-col lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    {/* Left Section - Image */}
    <div className="relative h-[60vh] lg:h-full flex-col bg-muted dark:border-r lg:flex">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/pic1.png')` }}
      />
    </div>
   
    {/* Right Section - Form */}
    <div className="relative flex-1 p-4 md:p-8 lg:p-12">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
        {children}
      </div>
    </div>
</div>
  )
}

export default layout