
const SectionWrapper = (Component,id) => (
    function HOC(){
      return (
        <div className={`${id} flex max-w-7xl mx-auto justify-start`}>
            <Component/>
        </div>
      )  
    }
)
  
  export default SectionWrapper