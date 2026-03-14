import React from 'react';
import ReactDOM from 'react-dom/client';


/* const heading = React.createElement(
    'h1',
    {id: 'heading'},
    'Hello React'
)
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading) */

/* 
- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
 */
/* const title = React.createElement(
    'div',
    {className: "title"}, 
    [
        React.createElement('h1', {key: "h1"}, 'Heading 1'),
        React.createElement('h2', {key: 'h2'}, "Heading 2"),
        React.createElement('h3', {key: 'h3'}, "Heading 3")
    ]
) */
// root.render(title)

/* 
- Create the `same element using JSX`
  - Create a `functional component of the same with JSX`
  - `Pass attribute` into the tag in `JSX`
  - `Composition of Component` (Add a component inside another)
  - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
*/

/* const titlewithJSX = <div>
    <h1>heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
    </div>;
root.render(titlewithJSX)
 */
/* const TitleWithFunctionalComponent = () => {
    return (
        <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
}
root.render(<TitleWithFunctionalComponent/>) */

/* const Title = () => {
    return (
        <React.Fragment>
            <p>This is Title</p>
        </React.Fragment>
    )
} */
// const Heading = (props) => {
//     const {title} = props
//     return (
//         <React.Fragment>
//             <h2>{title}</h2>
//             <Title/>
//             {Title()}
//             <Title></Title>
//             {/* {Title} */} {/* will give error */}
//         </React.Fragment>
//     )

//     /* <Title/> --> run title() --> return JSX --> render it */
// }

// root.render(<Heading title="Heading from props" />)

/* Part 2 */
// import icon from './icon.png';
const icon = new URL('./icon.png', import.meta.url);
const profile = new URL('./profile.png', import.meta.url);
import './header.css'
// import profile from './profile.png';
console.log(icon)
console.log(profile)
const Header = () => {
    return (
            <div className='container'>
                <div className='logo-container'>
                    <img className='logo' src={icon}/>
                </div>
                <div>
                    <input type='search' placeholder='search...'/>
                </div>
                <div className='user-icon-container'>
                    <img className='user-icon' src={profile}/>
                </div>
            </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>)