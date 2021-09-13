import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
	<main>
		<section class="text_me">
			<h2>Связаться со мной</h2>
			<hr/>
			<form>

				<label for="name" id="name1">имя</label>
				<input type="text" id="name"/>

				<label for="mail" id="mail1">почта</label>
				<input type="email" id="mail"/>

				<label for="message" id="message1">сообщение</label>
				<textarea id="message"></textarea>

				<input type="submit" id="submit"/>

			</form>
		</section>
	</main>
    </div>
  );
}



//  export function Menu() {
//   return (
//     <div className="Menu">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          на реакте
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;

