import './BackToTop.css'

function BackToTop() {
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <button onClick={scrollToTop} className='btt-btn'>
        ↑ Back to top
      </button>
    )
  }

export default BackToTop