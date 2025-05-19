const Tabs = ({ name, description }) => {
  return (
    <div className="text-black font-semibold">
        <p>{name}</p>
        <p>{description}</p>
    </div>
  )
}

export default Tabs;