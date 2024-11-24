interface CountryData {
	country: string;
	values: {
		year: number;
		value: number | null;
	}[];
}

export const europeData: CountryData[] = [
	{
		country: 'Belgium',
		values: [
			{ year: 2015, value: 7.2 },
			{ year: 2016, value: 8.4 },
			{ year: 2017, value: 7.2 },
			{ year: 2018, value: 6.5 },
			{ year: 2019, value: 6.3 },
			{ year: 2020, value: 6.7 },
			{ year: 2021, value: 6.3 },
			{ year: 2022, value: 5.8 },
			{ year: 2023, value: 6.1 }
		]
	},
	{
		country: 'Bulgaria',
		values: [
			{ year: 2015, value: 36.8 },
			{ year: 2016, value: 33.5 },
			{ year: 2017, value: 30.0 },
			{ year: 2018, value: 22.3 },
			{ year: 2019, value: 22.1 },
			{ year: 2020, value: 22.1 },
			{ year: 2021, value: 19.1 },
			{ year: 2022, value: 18.7 },
			{ year: 2023, value: 18.0 }
		]
	},
	{
		country: 'Czechia',
		values: [
			{ year: 2015, value: 4.5 },
			{ year: 2016, value: 3.5 },
			{ year: 2017, value: 3.4 },
			{ year: 2018, value: 2.4 },
			{ year: 2019, value: 2.1 },
			{ year: 2020, value: 1.9 },
			{ year: 2021, value: 1.8 },
			{ year: 2022, value: 2.1 },
			{ year: 2023, value: 2.7 }
		]
	},
	{
		country: 'Denmark',
		values: [
			{ year: 2015, value: 3.2 },
			{ year: 2016, value: 2.6 },
			{ year: 2017, value: 3.6 },
			{ year: 2018, value: 3.5 },
			{ year: 2019, value: 3.8 },
			{ year: 2020, value: 3.5 },
			{ year: 2021, value: 3.1 },
			{ year: 2022, value: 3.2 },
			{ year: 2023, value: 4.9 }
		]
	},
	{
		country: 'Germany',
		values: [
			{ year: 2015, value: 5.7 },
			{ year: 2016, value: 4.7 },
			{ year: 2017, value: 3.7 },
			{ year: 2018, value: 3.4 },
			{ year: 2019, value: 3.0 },
			{ year: 2020, value: 4.4 },
			{ year: 2021, value: 4.3 },
			{ year: 2022, value: 6.2 },
			{ year: 2023, value: 6.9 }
		]
	},
	{
		country: 'Estonia',
		values: [
			{ year: 2015, value: 3.5 },
			{ year: 2016, value: 2.2 },
			{ year: 2017, value: 4.0 },
			{ year: 2018, value: 3.1 },
			{ year: 2019, value: 2.6 },
			{ year: 2020, value: 2.3 },
			{ year: 2021, value: 1.9 },
			{ year: 2022, value: 3.3 },
			{ year: 2023, value: 2.5 }
		]
	},
	{
		country: 'Ireland',
		values: [
			{ year: 2015, value: 9.4 },
			{ year: 2016, value: 8.0 },
			{ year: 2017, value: 6.9 },
			{ year: 2018, value: 6.1 },
			{ year: 2019, value: 6.5 },
			{ year: 2020, value: 6.1 },
			{ year: 2021, value: 4.8 },
			{ year: 2022, value: 5.3 },
			{ year: 2023, value: 6.0 }
		]
	},
	{
		country: 'Greece',
		values: [
			{ year: 2015, value: 17.6 },
			{ year: 2016, value: 18.4 },
			{ year: 2017, value: 18.3 },
			{ year: 2018, value: 16.1 },
			{ year: 2019, value: 15.8 },
			{ year: 2020, value: 14.9 },
			{ year: 2021, value: 13.9 },
			{ year: 2022, value: 13.9 },
			{ year: 2023, value: 13.5 }
		]
	},
	{
		country: 'Spain',
		values: [
			{ year: 2015, value: 7.4 },
			{ year: 2016, value: 8.5 },
			{ year: 2017, value: 8.3 },
			{ year: 2018, value: 8.7 },
			{ year: 2019, value: 7.7 },
			{ year: 2020, value: 8.5 },
			{ year: 2021, value: 8.3 },
			{ year: 2022, value: 7.7 },
			{ year: 2023, value: 9.0 }
		]
	},
	{
		country: 'France',
		values: [
			{ year: 2015, value: 6.8 },
			{ year: 2016, value: 6.7 },
			{ year: 2017, value: 6.3 },
			{ year: 2018, value: 6.7 },
			{ year: 2019, value: 7.3 },
			{ year: 2020, value: 6.4 },
			{ year: 2021, value: 5.5 },
			{ year: 2022, value: 7.0 },
			{ year: 2023, value: 6.6 }
		]
	},
	{
		country: 'Croatia',
		values: [
			{ year: 2014, value: 10.8 },
			{ year: 2015, value: 8.4 },
			{ year: 2016, value: 7.3 },
			{ year: 2017, value: 7.1 },
			{ year: 2018, value: 6.1 },
			{ year: 2019, value: 4.6 },
			{ year: 2020, value: 4.4 },
			{ year: 2021, value: 3.5 },
			{ year: 2022, value: 4.0 },
			{ year: 2023, value: 2.8 }
		]
	},
	{
		country: 'Italy',
		values: [
			{ year: 2015, value: 12.1 },
			{ year: 2016, value: 10.1 },
			{ year: 2017, value: 6.6 },
			{ year: 2018, value: 6.5 },
			{ year: 2019, value: 6.4 },
			{ year: 2020, value: 6.2 },
			{ year: 2021, value: 5.9 },
			{ year: 2022, value: 4.5 },
			{ year: 2023, value: 4.7 }
		]
	},
	{
		country: 'Cyprus',
		values: [
			{ year: 2015, value: 7.9 },
			{ year: 2016, value: 6.6 },
			{ year: 2017, value: 6.1 },
			{ year: 2018, value: 3.8 },
			{ year: 2019, value: 3.2 },
			{ year: 2020, value: 3.2 },
			{ year: 2021, value: 2.6 },
			{ year: 2022, value: 2.7 },
			{ year: 2023, value: 2.4 }
		]
	},
	{
		country: 'Latvia',
		values: [
			{ year: 2015, value: 15.4 },
			{ year: 2016, value: 12.6 },
			{ year: 2017, value: 12.9 },
			{ year: 2018, value: 10.4 },
			{ year: 2019, value: 7.5 },
			{ year: 2020, value: 7.0 },
			{ year: 2021, value: 5.3 },
			{ year: 2022, value: 7.8 },
			{ year: 2023, value: 6.2 }
		]
	},
	{
		country: 'Lithuania',
		values: [
			{ year: 2015, value: 14.6 },
			{ year: 2016, value: 15.4 },
			{ year: 2017, value: 14.4 },
			{ year: 2018, value: 12.0 },
			{ year: 2019, value: 9.7 },
			{ year: 2020, value: 8.1 },
			{ year: 2021, value: 6.4 },
			{ year: 2022, value: 6.0 },
			{ year: 2023, value: 6.1 }
		]
	},
	{
		country: 'Luxembourg',
		values: [
			{ year: 2015, value: 2.5 },
			{ year: 2016, value: 2.0 },
			{ year: 2017, value: 1.9 },
			{ year: 2018, value: 1.6 },
			{ year: 2019, value: 1.4 },
			{ year: 2020, value: 1.7 },
			{ year: 2021, value: 2.4 },
			{ year: 2022, value: 2.0 },
			{ year: 2023, value: 2.5 }
		]
	},
	{
		country: 'Hungary',
		values: [
			{ year: 2015, value: 24.1 },
			{ year: 2016, value: 20.6 },
			{ year: 2017, value: 16.1 },
			{ year: 2018, value: 11.9 },
			{ year: 2019, value: 10.9 },
			{ year: 2020, value: 10.7 },
			{ year: 2021, value: 10.2 },
			{ year: 2022, value: 9.1 },
			{ year: 2023, value: 10.4 }
		]
	},
	{
		country: 'Malta',
		values: [
			{ year: 2015, value: 8.2 },
			{ year: 2016, value: 5.2 },
			{ year: 2017, value: 4.3 },
			{ year: 2018, value: 4.7 },
			{ year: 2019, value: 5.0 },
			{ year: 2020, value: 5.1 },
			{ year: 2021, value: 5.4 },
			{ year: 2022, value: 4.9 },
			{ year: 2023, value: 4.1 }
		]
	},
	{
		country: 'Netherlands',
		values: [
			{ year: 2015, value: 3.2 },
			{ year: 2016, value: 2.6 },
			{ year: 2017, value: 2.6 },
			{ year: 2018, value: 2.6 },
			{ year: 2019, value: 2.8 },
			{ year: 2020, value: 2.2 },
			{ year: 2021, value: 2.1 },
			{ year: 2022, value: 2.5 },
			{ year: 2023, value: 2.7 }
		]
	},
	{
		country: 'Austria',
		values: [
			{ year: 2015, value: 2.9 },
			{ year: 2016, value: 3.3 },
			{ year: 2017, value: 3.4 },
			{ year: 2018, value: 2.8 },
			{ year: 2019, value: 2.7 },
			{ year: 2020, value: 3.0 },
			{ year: 2021, value: 1.8 },
			{ year: 2022, value: 2.3 },
			{ year: 2023, value: 3.7 }
		]
	},
	{
		country: 'Poland',
		values: [
			{ year: 2015, value: 7.8 },
			{ year: 2016, value: 5.4 },
			{ year: 2017, value: 5.3 },
			{ year: 2018, value: 4.5 },
			{ year: 2019, value: 3.5 },
			{ year: 2020, value: 2.6 },
			{ year: 2021, value: 2.9 },
			{ year: 2022, value: 2.8 },
			{ year: 2023, value: 3.0 }
		]
	},
	{
		country: 'Portugal',
		values: [
			{ year: 2015, value: 10.9 },
			{ year: 2016, value: 9.1 },
			{ year: 2017, value: 8.0 },
			{ year: 2018, value: 6.6 },
			{ year: 2019, value: 5.6 },
			{ year: 2020, value: 5.4 },
			{ year: 2021, value: 6.0 },
			{ year: 2022, value: 5.3 },
			{ year: 2023, value: 4.9 }
		]
	},
	{
		country: 'Romania',
		values: [
			{ year: 2015, value: 34.0 },
			{ year: 2016, value: 35.9 },
			{ year: 2017, value: 32.4 },
			{ year: 2018, value: 28.3 },
			{ year: 2019, value: 24.5 },
			{ year: 2020, value: 25.3 },
			{ year: 2021, value: 23.1 },
			{ year: 2022, value: 24.3 },
			{ year: 2023, value: 19.8 }
		]
	},
	{
		country: 'Slovenia',
		values: [
			{ year: 2015, value: 4.8 },
			{ year: 2016, value: 4.1 },
			{ year: 2017, value: 4.5 },
			{ year: 2018, value: 3.2 },
			{ year: 2019, value: 2.2 },
			{ year: 2020, value: 2.6 },
			{ year: 2021, value: 1.8 },
			{ year: 2022, value: 1.4 },
			{ year: 2023, value: 2.0 }
		]
	},
	{
		country: 'Slovakia',
		values: [
			{ year: 2015, value: 8.4 },
			{ year: 2016, value: 7.6 },
			{ year: 2017, value: 6.3 },
			{ year: 2018, value: 5.4 },
			{ year: 2019, value: 5.9 },
			{ year: 2020, value: 4.5 },
			{ year: 2021, value: 5.7 },
			{ year: 2022, value: 6.3 },
			{ year: 2023, value: 7.0 }
		]
	},
	{
		country: 'Finland',
		values: [
			{ year: 2015, value: 1.0 },
			{ year: 2016, value: 1.2 },
			{ year: 2017, value: 1.8 },
			{ year: 2018, value: 2.2 },
			{ year: 2019, value: 1.9 },
			{ year: 2020, value: 1.8 },
			{ year: 2021, value: 1.1 },
			{ year: 2022, value: 1.9 },
			{ year: 2023, value: 2.8 }
		]
	},
	{
		country: 'Sweden',
		values: [
			{ year: 2015, value: 1.1 },
			{ year: 2016, value: 0.7 },
			{ year: 2017, value: 1.0 },
			{ year: 2018, value: 1.4 },
			{ year: 2019, value: 1.5 },
			{ year: 2020, value: 2.0 },
			{ year: 2021, value: 1.4 },
			{ year: 2022, value: 2.3 },
			{ year: 2023, value: 2.5 }
		]
	},
	{
		country: 'Iceland',
		values: [
			{ year: 2015, value: 1.4 },
			{ year: 2016, value: 1.0 },
			{ year: 2017, value: 0.6 },
			{ year: 2018, value: 0.7 },
			{ year: 2019, value: 0.5 },
			{ year: 2020, value: null },
			{ year: 2021, value: null },
			{ year: 2022, value: null },
			{ year: 2023, value: null }
		]
	},
	{
		country: 'Norway',
		values: [
			{ year: 2015, value: 1.7 },
			{ year: 2016, value: null },
			{ year: 2017, value: 2.0 },
			{ year: 2018, value: 1.7 },
			{ year: 2019, value: 2.0 },
			{ year: 2020, value: 2.4 },
			{ year: 2021, value: 2.1 },
			{ year: 2022, value: 1.9 },
			{ year: 2023, value: 2.6 }
		]
	},
	{
		country: 'Switzerland',
		values: [
			{ year: 2015, value: 2.0 },
			{ year: 2016, value: 2.0 },
			{ year: 2017, value: 1.9 },
			{ year: 2018, value: 2.1 },
			{ year: 2019, value: 3.2 },
			{ year: 2020, value: 1.6 },
			{ year: 2021, value: 1.8 },
			{ year: 2022, value: 2.2 },
			{ year: 2023, value: 2.4 }
		]
	},
	{
		country: 'United Kingdom',
		values: [
			{ year: 2015, value: 6.7 },
			{ year: 2016, value: 6.5 },
			{ year: 2017, value: 4.7 },
			{ year: 2018, value: 4.5 },
			{ year: 2019, value: null },
			{ year: 2020, value: null },
			{ year: 2021, value: null },
			{ year: 2022, value: null },
			{ year: 2023, value: null }
		]
	},
	{
		country: 'Montenegro',
		values: [
			{ year: 2015, value: 32.1 },
			{ year: 2016, value: 29.5 },
			{ year: 2017, value: 28.5 },
			{ year: 2018, value: 27.3 },
			{ year: 2019, value: 21.0 },
			{ year: 2020, value: 23.0 },
			{ year: 2021, value: 24.0 },
			{ year: 2022, value: 18.0 },
			{ year: 2023, value: null }
		]
	},
	{
		country: 'North Macedonia',
		values: [
			{ year: 2015, value: 29.1 },
			{ year: 2016, value: 27.5 },
			{ year: 2017, value: 24.6 },
			{ year: 2018, value: 22.6 },
			{ year: 2019, value: 22.1 },
			{ year: 2020, value: 17.8 },
			{ year: 2021, value: null },
			{ year: 2022, value: null },
			{ year: 2023, value: null }
		]
	},
	{
		country: 'Albania',
		values: [
			{ year: 2015, value: null },
			{ year: 2016, value: null },
			{ year: 2017, value: 51.2 },
			{ year: 2018, value: 46.7 },
			{ year: 2019, value: 42.5 },
			{ year: 2020, value: 38.9 },
			{ year: 2021, value: 39.0 },
			{ year: 2022, value: null },
			{ year: 2023, value: null }
		]
	},
	{
		country: 'Serbia',
		values: [
			{ year: 2015, value: 25.1 },
			{ year: 2016, value: null },
			{ year: 2017, value: 22.8 },
			{ year: 2018, value: 17.4 },
			{ year: 2019, value: 14.3 },
			{ year: 2020, value: 14.1 },
			{ year: 2021, value: 13.3 },
			{ year: 2022, value: 14.1 },
			{ year: 2023, value: null }
		]
	},
	{
		country: 'Turkey',
		values: [
			{ year: 2015, value: null },
			{ year: 2016, value: null },
			{ year: 2017, value: 15.4 },
			{ year: 2018, value: 15.4 },
			{ year: 2019, value: 15.9 },
			{ year: 2020, value: 16.7 },
			{ year: 2021, value: 18.2 },
			{ year: 2022, value: 15.2 },
			{ year: 2023, value: 14.5 }
		]
	}
];

export function getAverageByCountry(countryName: string): number {
	const country = europeData.find((c) => c.country === countryName);
	if (!country) return 0;

	const validValues = country.values
		.map((v) => v.value)
		.filter((value): value is number => value !== null && value !== undefined);

	if (validValues.length === 0) return 0;

	const sum = validValues.reduce((acc, curr) => acc + curr, 0);
	return Number((sum / validValues.length).toFixed(1));
}

export function getLatestByCountry(countryName: string): number | null {
	const country = europeData.find((c) => c.country === countryName);
	if (!country) return null;

	const latest = country.values.find((v) => v.year === 2023);
	return latest?.value ?? null;
}

export function getAllLatest(): { country: string; value: number | null }[] {
	return europeData.map((country) => ({
		country: country.country,
		value: getLatestByCountry(country.country)
	}));
}

export function getAllAverages(): { country: string; value: number }[] {
	return europeData.map((country) => ({
		country: country.country,
		value: getAverageByCountry(country.country)
	}));
}
