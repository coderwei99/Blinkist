export default function HeaderRight() {
  const links = ['Coaching', 'For business', 'Log in']
  return (
    <div className="flex justify-end">
      {links.map((link, index) => (
        <a key={index} href="#" className="mr-[32px] font-bold">
          {link}
        </a>
      ))}
    </div>
  )
}
