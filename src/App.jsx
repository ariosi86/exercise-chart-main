import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

const tabs = [
	{
		label: "Primavera",
		content: (
			<>
				<img
					src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
					alt="Primavera"
					className="w-full h-48 object-cover rounded-lg mb-4 shadow"
				/>
				<h2 className="text-xl font-semibold mb-2 text-green-700">
					Primavera
				</h2>
				<p className="text-gray-700 mb-2">
					La primavera marca el renacimiento de la flora y fauna. Las
					temperaturas son suaves y los días se alargan, permitiendo que las
					plantas florezcan y los animales retomen su actividad. Es una época de
					crecimiento y renovación.
				</p>
				<ul className="list-disc pl-6 text-gray-600">
					<li>Flores y árboles brotan.</li>
					<li>Animales salen de la hibernación.</li>
					<li>El clima es templado y agradable.</li>
				</ul>
			</>
		),
	},
	{
		label: "Verano",
		content: (
			<>
				<img
					src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
					alt="Verano"
					className="w-full h-48 object-cover rounded-lg mb-4 shadow"
				/>
				<h2 className="text-xl font-semibold mb-2 text-yellow-700">
					Verano
				</h2>
				<p className="text-gray-700 mb-2">
					El verano se caracteriza por días cálidos y soleados. Es ideal para el
					crecimiento de muchas plantas y para disfrutar actividades al aire
					libre. Los animales aprovechan la abundancia de alimento.
				</p>
				<ul className="list-disc pl-6 text-gray-600">
					<li>Altas temperaturas y mucho sol.</li>
					<li>Frutas y verduras en su punto.</li>
					<li>Mayor actividad animal y humana.</li>
				</ul>
			</>
		),
	},
	{
		label: "Otoño",
		content: (
			<>
				<img
					src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
					alt="Otoño"
					className="w-full h-48 object-cover rounded-lg mb-4 shadow"
				/>
				<h2 className="text-xl font-semibold mb-2 text-orange-700">
					Otoño
				</h2>
				<p className="text-gray-700 mb-2">
					El otoño trae la caída de las hojas y el descenso de las temperaturas.
					La naturaleza se prepara para el invierno, los días se acortan y muchos
					animales almacenan alimento.
				</p>
				<ul className="list-disc pl-6 text-gray-600">
					<li>Hojas cambian de color y caen.</li>
					<li>Temperaturas más frescas.</li>
					<li>Preparación para el invierno.</li>
				</ul>
			</>
		),
	},
	{
		label: "Invierno",
		content: (
			<>
				<img
					src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
					alt="Invierno"
					className="w-full h-48 object-cover rounded-lg mb-4 shadow"
				/>
				<h2 className="text-xl font-semibold mb-2 text-blue-700">Invierno</h2>
				<p className="text-gray-700 mb-2">
					El invierno es la estación más fría, con menos luz solar. Muchas plantas
					y animales entran en reposo, y la naturaleza se toma un descanso antes
					de iniciar un nuevo ciclo.
				</p>
				<ul className="list-disc pl-6 text-gray-600">
					<li>Bajas temperaturas y menos luz.</li>
					<li>Animales hibernan o migran.</li>
					<li>La vida se ralentiza.</li>
				</ul>
			</>
		),
	},
];

function App() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<Header />
			<main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
				<h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
					Ciclos de la Naturaleza y las Estaciones del Año
				</h1>
				<p className="text-gray-700 text-center mb-8">
					La naturaleza está marcada por ciclos que se repiten año tras año. Las
					estaciones —primavera, verano, otoño e invierno— influyen en el clima,
					las plantas, los animales y nuestras actividades. Estos ciclos nos
					enseñan sobre el cambio, la adaptación y la importancia de cada etapa
					en la vida de la Tierra.
				</p>
				<div className="flex justify-center mb-6">
					{tabs.map((tab, idx) => (
						<button
							key={tab.label}
							className={`px-4 py-2 mx-1 rounded-t-lg font-medium transition-colors ${
								activeTab === idx
									? "bg-blue-600 text-white shadow"
									: "bg-gray-200 text-gray-500 hover:bg-blue-100"
							}`}
							onClick={() => setActiveTab(idx)}
						>
							{tab.label}
						</button>
					))}
				</div>
				<section className="p-4 bg-gray-50 rounded-b-lg">
					{tabs[activeTab].content}
				</section>
				<p className="mt-8 text-gray-600 text-center">
					Los ciclos de la naturaleza son esenciales para la vida en la Tierra. Nos
					muestran cómo todo está conectado y cómo cada estación cumple una
					función vital en el equilibrio del planeta.
				</p>
			</main>
		</>
	);
}

export default App;
