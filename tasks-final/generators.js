var list = ["Leonora", "Max Mekker", "Alfa", "Bernt"],
l = list.length;

export default function* generator () {
	while(l--) {
		yield list[l];
	}
}
