import { render } from 'preact';
import './style.css';
import Main from './Main'

export function App() {
	return (
		<Main />
	);
}


render(<App />, document.getElementById('app'));
