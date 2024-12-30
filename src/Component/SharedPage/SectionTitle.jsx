

const SectionTitle = ({sub,heading}) => {
  return (
    <div className='w-1/3 mx-auto my-8'>
        <h2 className='text-yellow-600  text-lg uppercase font-bold text-center py-3'>---{sub}---</h2>
        <p className='text-3xl font-semibold uppercase text-center py-3 border-y-2 border-slate-400'>{heading}</p>
    </div>
  )
}

export default SectionTitle