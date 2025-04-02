import React from "react";

const InfoPage = () => {
	const sources = [
		{ id: 1, name: "World Bank", link: "https://www.worldbank.org" },
		{ id: 2, name: "United Nations", link: "https://www.un.org" },
		{ id: 3, name: "NASA Climate", link: "https://climate.nasa.gov" },
		{ id: 4, name: "IPCC Reports", link: "https://www.ipcc.ch" },
		{ id: 5, name: "EPA", link: "https://www.epa.gov" },
		{ id: 6, name: "Our World in Data", link: "https://ourworldindata.org" },
		{ id: 7, name: "Carbon Brief", link: "https://www.carbonbrief.org" },
		{ id: 8, name: "IEA", link: "https://www.iea.org" },
		{
			id: 9,
			name: "Climate Action Tracker",
			link: "https://climateactiontracker.org",
		},
		{ id: 10, name: "WWF", link: "https://www.worldwildlife.org" },
	];

	return (
		<div className="container mx-auto p-4">
			<div className="overflow-x-auto">
				<table className="table-auto w-full border-collapse border border-accent">
					<thead className="bg-primary text-background">
						<tr>
							<th className="border border-accent px-4 py-2 text-left">#</th>
							<th className="border border-accent px-4 py-2 text-left">
								Source Name
							</th>
							<th className="border border-accent px-4 py-2 text-left">Link</th>
						</tr>
					</thead>
					<tbody>
						{sources.map((source) => (
							<tr key={source.id} className="hover:bg-foreground/10">
								<td className="border border-accent px-4 py-2">{source.id}</td>
								<td className="border border-accent px-4 py-2">
									{source.name}
								</td>
								<td className="border border-accent px-4 py-2">
									<a
										href={source.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 underline"
									>
										{source.link}
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default InfoPage;
