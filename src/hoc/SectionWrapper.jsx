
const SectionWrapper = (Component,id) => (
    function HOC(){
      return (
        <div className={`${id} mt-5 max-w-7xl flex justify-start mx-[10%] items-center`}>
           <span className="hash-span" id={id}>&nbsp;</span>
            <Component/>
        </div>
      )  
    }
)
  
  export default SectionWrapper