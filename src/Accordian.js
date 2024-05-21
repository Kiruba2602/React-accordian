import React, { useState } from 'react'

const Accordian = ({sections}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
  return (
    <div className='accordian'>
        {sections.map((section, index) => (
            <div key={index} className='accordian-section'>
                <div className={`accordian-title ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
                    <div className='accordian-arrow'>&#9662;</div>
                    {section.title}
                </div>
                <div className={`accordian-content ${activeIndex === index ? 'active' : ''}`} 
                style={{maxHeight: activeIndex === index ? '200px' : '0'}}>
                    {section.content}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Accordian;