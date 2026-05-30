export const metadata ={
  title: 'Yusuf Olamitunji Yisa (devYisa)',
  description: 'Easy Technology Company (ETC) is a future oriented tech service provider with full strenght in Software and Hardware Engineering'
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}