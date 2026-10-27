import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <main className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <Header />
        <Experience />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;