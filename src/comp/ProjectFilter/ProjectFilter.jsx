import React from 'react'

function ProjectFilter() {
  return (
 <div className='project-filter'>
					{/* condense filter buttons to mapped out component */}
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						All
					</span>
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						Front-end
					</span>
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						Fullstack
					</span>
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						No-code
					</span>
					{/* <span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						React-Native
					</span> */}
				</div>
  )
}

export default ProjectFilter